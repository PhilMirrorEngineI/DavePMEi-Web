import { NextResponse } from "next/server"
import Stripe from "stripe"

// 👇 Use the Stripe version that matches the installed SDK
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // This matches the types bundled with stripe@19.0.0
  apiVersion: "2025-09-30.clover" as Stripe.LatestApiVersion,
})

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Support PhilMirrorEnginei.Ai",
            },
            unit_amount: amount || 500, // default £5
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (err: any) {
    console.error("Stripe error:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
