"use client";

export default function DonateButton() {
  // Replace this with your live Stripe link
  const stripeUrl = "https://donate.stripe.com/dRmeVf5327e24Ml1XL87K01";

  return (
    <button
      onClick={() => window.open(stripeUrl, "_blank")}
      className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg 
                 hover:bg-yellow-400 transition duration-200 ease-in-out"
    >
      Donate £5
    </button>
  );
}
