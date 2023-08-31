import Link from "next/link";
import React from "react";
import styles from "./AdsNavbar.module.css";
import Image from "next/image";
import closeButton from "../../public/Frame.png";

const AdsNavbar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Sign up and get 20% off to your first order.{" "}
        <Link
          style={{ textDecoration: "underline", fontWeight: "bold" }}
          href={"/signup"}
        >
          Sign Up Now
        </Link>
      </p>
      <div className={styles.closeButtonStyle}>
        <Image src={closeButton} width={20} height={20} />
      </div>
    </div>
  );
};

export default AdsNavbar;
