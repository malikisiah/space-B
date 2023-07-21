import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;
  const stripe = new Stripe(secretKey, {
    apiVersion: "2022-11-15",
  });

  let data = await request.json();
  let priceId = data.id;
  let email = data.email;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_email: email,
    success_url: "https://special-affair.vercel.app/",
    cancel_url: "https://special-affair.vercel.app/",
  });

  return NextResponse.json(session.url);
}
