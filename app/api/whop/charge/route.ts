import { NextRequest, NextResponse } from "next/server";

const WHOP_API_KEY = process.env.WHOP_API_KEY!;
const WHOP_COMPANY_ID = process.env.WHOP_COMPANY_ID!;

interface WhopPayment {
  id: string;
  member?: { id: string };
  user?: { id: string };
  payment_method?: { id: string };
}

interface ChargeRequest {
  payment_id: string;
  plan_id: string;
}

/**
 * One-click upsell charge endpoint.
 * Uses the payment_id from the initial checkout to charge the saved card.
 */
export async function POST(request: NextRequest) {
  try {
    const body: ChargeRequest = await request.json();
    const { payment_id, plan_id } = body;

    if (!payment_id || !plan_id) {
      return NextResponse.json(
        { error: "Missing payment_id or plan_id" },
        { status: 400 }
      );
    }

    // Step 1: Fetch the original payment to get member_id and payment_method_id
    const paymentResponse = await fetch(
      `https://api.whop.com/api/v1/payments/${payment_id}`,
      {
        headers: {
          Authorization: `Bearer ${WHOP_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!paymentResponse.ok) {
      const errorText = await paymentResponse.text();
      console.error("Failed to fetch payment:", errorText);
      return NextResponse.json(
        { error: "Failed to retrieve payment details" },
        { status: 400 }
      );
    }

    const payment: WhopPayment = await paymentResponse.json();

    // Extract member_id (can be in member.id or user.id)
    const memberId = payment.member?.id || payment.user?.id;
    const paymentMethodId = payment.payment_method?.id;

    if (!memberId) {
      return NextResponse.json(
        { error: "No member found for this payment" },
        { status: 400 }
      );
    }

    if (!paymentMethodId) {
      return NextResponse.json(
        { error: "No saved payment method found. Customer must complete a real payment first." },
        { status: 400 }
      );
    }

    // Step 2: Create the off-session charge
    const chargeResponse = await fetch("https://api.whop.com/api/v1/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHOP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: WHOP_COMPANY_ID,
        member_id: memberId,
        payment_method_id: paymentMethodId,
        plan_id: plan_id,
      }),
    });

    if (!chargeResponse.ok) {
      const errorData = await chargeResponse.json().catch(() => ({}));
      console.error("Charge failed:", errorData);

      // Parse common error types for user-friendly messages
      const errorMessage = errorData.message || errorData.error || "Charge failed";
      const lowerError = errorMessage.toLowerCase();

      if (lowerError.includes("insufficient") || lowerError.includes("funds")) {
        return NextResponse.json({ error: "Insufficient funds" }, { status: 402 });
      }
      if (lowerError.includes("declined")) {
        return NextResponse.json({ error: "Card declined" }, { status: 402 });
      }
      if (lowerError.includes("expired")) {
        return NextResponse.json({ error: "Card expired" }, { status: 402 });
      }
      if (lowerError.includes("3ds") || lowerError.includes("verification")) {
        return NextResponse.json({ error: "3DS verification required" }, { status: 402 });
      }

      return NextResponse.json({ error: errorMessage }, { status: 402 });
    }

    const chargeData = await chargeResponse.json();

    return NextResponse.json({
      success: true,
      charge_id: chargeData.id,
      status: chargeData.status,
    });
  } catch (error) {
    console.error("One-click charge error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
