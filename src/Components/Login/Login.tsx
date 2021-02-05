import React, { useState } from "react";
import styles from "./Login.module.scss";
import Image from "next/image";
import logo from "../NavBar/netflix-logo.svg";
import { NextRouter, useRouter } from "next/router";
import { auth } from "../../firebase/firebase";
import loader from "../../lottie/loader.json";
import Lottie from "react-lottie";

function SignUp(): JSX.Element {
  const router: NextRouter = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);

  const signUp = async () => {
    setProcessing(true);
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.content}>
        <div className={styles.top_logo}>
          <Image src={logo} alt={"netflix logo"} width={200} height={120} />
        </div>

        <div className={styles.top_login}>
          <h2 className={styles.sign_in_title}>Sign In</h2>

          <p className={styles.error}>{error}</p>

          <input
            type="email"
            className={styles.input}
            placeholder={"Email address"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className={styles.input}
            placeholder={"Password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            className={styles.button}
            onClick={signUp}
            disabled={processing}
            style={{ opacity: processing && 0.6 }}
          >
            {!processing ? (
              "Sign In"
            ) : (
              <div>
                <Lottie
                  width={40}
                  height={40}
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: loader,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
            )}
          </button>

          <p className={styles.new}>
            New to Netflix?{" "}
            <span
              className={styles.sign_up_link}
              onClick={() => router.push("/auth/sign-up")}
            >
              Sign Up now.
            </span>
          </p>
        </div>
      </div>

      <div className={styles.overlay}></div>
    </div>
  );
}

export default SignUp;
