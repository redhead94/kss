import Stripe from "stripe";
import { NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export async function POST(req: NextRequest) {
  const { amountCents = 1800, purpose = "Donation" } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card", "us_bank_account"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: purpose },
        unit_amount: amountCents
      },
      quantity: 1
    }],
    allow_promotion_codes: true,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thanks`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate?cancel=1`,
    metadata: { purpose }
  });

  return new Response(JSON.stringify({ url: session.url }), { status: 200, headers: { "Content-Type": "application/json" } });
}
