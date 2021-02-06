import React from "react";
import styles from "./Plan.module.scss";

function Plan(): JSX.Element {
  return (
    <div className={styles.plan}>
      <div className={styles.left}>
        <h5 className={styles.title}>Netflix Basic</h5>
        <p className={styles.price}>$6.99/month</p>
      </div>

      <button className={styles.subscribe}>Subscribe</button>
    </div>
  );
}

export default Plan;
