import React from "react";
import styles from "./Top.module.scss";
import Image from "next/image";
import logo from "../NavBar/netflix-logo.svg";
import { NextRouter, useRouter } from "next/router";

function Top(): JSX.Element {
  const router: NextRouter = useRouter();

  return (
    <>
      <div className={styles.top}>
        <div className={styles.content}>
          <div className={styles.top_bar}>
            <Image src={logo} alt={"netflix logo"} width={130} height={80} />

            <button
              className={styles.sign_in_button}
              onClick={() => router.push("/auth/login")}
            >
              Sign in
            </button>
          </div>

          <div className={styles.top_content}>
            <h1 className={styles.title}>
              Unlimited movies, TV shows and more.
            </h1>

            <h3 className={styles.subtitle}>Watch anywhere. Cancel anytime.</h3>

            <h5 className={styles.desc}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>

            <div className={styles.email_container}>
              <input
                className={styles.email_input}
                type="email"
                placeholder={"Email address"}
              />
              <button className={styles.get_started_button}>
                GET STARTED &gt;
              </button>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.divider}></div>
    </>
  );
}

export default Top;
