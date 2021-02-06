import React from "react";
import styles from "./Plan.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { State } from "../../../redux/store";

function Plan(): JSX.Element {
  const { user } = useSelector((state: State) => state);

  const subscribe = async () => {
    try {
      const { data } = await axios.post(
        `${window.location.origin}/api/create-checkout-session`,
        {
          plan: "basic",
          origin: window.location.origin,
          uid: user.uid,
        }
      );

      console.log("received data");
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );

      await stripe?.redirectToCheckout({
        sessionId: data.id,
      });
      console.log("redirecting");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.plan}>
      <div>
        <h5 className={styles.title}>Netflix Basic</h5>
        <p className={styles.price}>$6.99/month</p>
      </div>

      <button className={styles.subscribe} onClick={subscribe}>
        Subscribe
      </button>
    </div>
  );
}

export default Plan;
