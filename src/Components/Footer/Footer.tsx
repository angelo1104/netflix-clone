import React from "react";
import styles from "./Footer.module.scss";

interface Props {
  style?: object;
}

function Footer({ style }: Props) {
  return (
    <>
      <div className={styles.footer} style={style}>
        <p className={styles.footer_item}>Questions? Call 000-800-040-1843</p>

        <div className={styles.footer_columns}>
          <div className={styles.footer_column}>
            <p className={styles.footer_item}>FAQ</p>
            <p className={styles.footer_item}>Investor relations</p>
            <p className={styles.footer_item}>Privacy</p>
            <p className={styles.footer_item}>Speed test</p>
          </div>

          <div className={styles.footer_column}>
            <p className={styles.footer_item}>Help Centre</p>
            <p className={styles.footer_item}>Jobs</p>
            <p className={styles.footer_item}>Cookie Preferences</p>
            <p className={styles.footer_item}>Legal Notices</p>
          </div>

          <div className={styles.footer_column}>
            <p className={styles.footer_item}>Account</p>
            <p className={styles.footer_item}>Ways to Watch</p>
            <p className={styles.footer_item}>Corporate Information</p>
            <p className={styles.footer_item}>Netflix Originals</p>
          </div>

          <div className={styles.footer_column}>
            <p className={styles.footer_item}>Media Centre</p>
            <p className={styles.footer_item}>Terms of Use</p>
            <p className={styles.footer_item}>Contact Us</p>
          </div>
        </div>

        <p className={styles.footer_item}>Netflix</p>
      </div>
    </>
  );
}

export default Footer;
