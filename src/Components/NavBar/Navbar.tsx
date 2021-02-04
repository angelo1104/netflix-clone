import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "./netflix-logo.svg";
import styles from "./Navbar.module.scss";
import avatar from "./avatar.png";

function Navbar() {
  const [show, handleShow] = useState<boolean>(false);

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

  return (
    <div className={`${styles.navbar} ${show && styles.nav_dark}`}>
      <Image
        src={logo}
        alt="Netflix logo"
        height={45}
        width={100}
        className={styles.logo}
      />

      <Image
        src={avatar}
        alt="Avatar"
        height={40}
        width={40}
        className={styles.avatar}
      />
    </div>
  );
}

export default Navbar;
