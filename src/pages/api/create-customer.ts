import { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../stripe/stripe";
import Stripe from "stripe";
import { database } from "../../firebase/firebase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // do post stuff
    interface Body {
      email: string;
      uid: string;
    }
    const { email, uid }: Body = req.body;

    try {
      const customer: Stripe.Customer = await stripe.customers.create({
        email: email,
      });

      const user = await database.collection("users").doc(uid).set({
        customerId: customer.id,
        email: email,
        status: "select",
      });

      res.status(200).json({
        customerId: customer.id,
        email: email,
        status: "select",
      });
    } catch (error) {
      console.log(error);
      res.status(200).json({
        hello: `perry chilli chicken ${email}`,
      });
    }
  } else if (req.method === "GET") {
    //do get stuff
    res.json({
      hello: "Salve",
    });
  }
};

export default handler;
