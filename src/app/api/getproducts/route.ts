import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;
  const stripe = new Stripe(secretKey, {
    apiVersion: "2022-11-15",
  });

  const prices = await stripe.prices.list();

  return NextResponse.json(prices.data);
}
