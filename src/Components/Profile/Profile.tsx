import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import Navbar from "../NavBar/Navbar";
import avatar from "../NavBar/avatar.png";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { auth } from "../../firebase/firebase";
import { NextRouter, useRouter } from "next/router";
import Plan from "./Plan/Plan";

function Profile(): JSX.Element {
  const { user } = useSelector((state: State) => state);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (!user) router.replace("/auth/login");
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

            <h3 className={styles.plans_title}>Plans</h3>

            <Plan />

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
