import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "./netflix-logo.svg";
import styles from "./Navbar.module.scss";
import avatar from "./avatar.png";
import { NextRouter, useRouter } from "next/router";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { auth } from "../../firebase/firebase";

function Navbar() {
  const [show, handleShow] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  const { user } = useSelector((state: State) => state);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const goToHome = () => {
    if (user) router.push("/home");
  };

  const goToProfile = () => {
    const user = auth.currentUser;
    if (user) router.push("/profile");
  };

  return (
    <div className={`${styles.navbar} ${show && styles.nav_dark}`}>
      <div onClick={goToHome}>
        <Image
          src={logo}
          alt="Netflix logo"
          height={45}
          width={100}
          className={styles.logo}
        />
      </div>

      <div onClick={goToProfile}>
        <Image
          src={avatar}
          alt="Avatar"
          height={40}
          width={40}
          className={styles.avatar}
        />
      </div>
    </div>
  );
}

export default Navbar;
