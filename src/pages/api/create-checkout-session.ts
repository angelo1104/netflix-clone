import type { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../stripe/stripe";

const prices: any = {
  premium: "price_1IHrrBG7mYQXcjRQl15RVYYt",
  standard: "price_1IHrqgG7mYQXcjRQGRJqEfdo",
  basic: "price_1IHrlRG7mYQXcjRQSRgMotCq",
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    //do post stuff
    interface Body {
      plan: string;
      origin: string;
      uid: string;
    }

    const { plan, origin, uid }: Body = req.body;

    try {
      const session: any = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: prices[plan],
            // For metered billing, do not pass quantity
            quantity: 1,
          },
        ],
        success_url: `${origin}/success?success=true&plan=${plan}&uid=${uid}`,
        cancel_url: `${origin}/success?success=false`,
      });

      res.status(200).json({
        ...session,
      });
    } catch (e) {
      console.log("error", e);
      res.status(400).json({
        message: "Internal server error.",
      });
    }
  }
};

export default handler;
