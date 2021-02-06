import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import Navbar from "../NavBar/Navbar";
import avatar from "../NavBar/avatar.png";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { auth, database } from "../../firebase/firebase";
import { NextRouter, useRouter } from "next/router";
import Plan from "./Plan/Plan";

function Profile(): JSX.Element {
  const { user } = useSelector((state: State) => state);
  const router: NextRouter = useRouter();
  const [plan, setPlan] = useState<string>("");

  const plans: any = {
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    select: "Please select a plan.",
  };

  useEffect(() => {
    if (!auth.currentUser?.email) router.replace("/auth/login");
    else {
      database
        .collection("users")
        .doc(auth.currentUser.uid)
        .onSnapshot((snapshot) => {
          const user = snapshot.data();
          setPlan(user?.status);
        });
    }
  }, [user]);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className={styles.profile}>
      <Navbar />

      <div className={styles.profile_content}>
        <h1 className={styles.title}>Edit Profile</h1>

        <hr className={styles.divider} />

        <div className={styles.main}>
          <img src={avatar} className={styles.avatar} />

          <div className={styles.main_left}>
            <input
              className={styles.email_input}
              type="text"
              disabled={true}
              value={user?.email}
            />

            <h3 className={styles.plans_title}>{plans[plan]}</h3>

            <Plan
              title={"Netflix Premium"}
              price={9.99}
              currentPlan={plan}
              plan={"premium"}
            />

            <hr className={styles.divider} />

            <Plan
              title={"Netflix Basic"}
              price={6.99}
              currentPlan={plan}
              plan={"basic"}
            />

            <hr className={styles.divider} />

            <Plan
              title={"Netflix Standard"}
              price={parseFloat("4.00")}
              currentPlan={plan}
              plan={"standard"}
            />

            <hr className={styles.divider} />

            <button className={styles.sign_out} onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
