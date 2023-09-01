import React from "react";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "../../public/searchIcon.jpg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Link href={"/"}>
          <h1 className={styles.h1}>SHOP.CO</h1>
        </Link>
        <Link href={"/products"}>Shop</Link>
        <Link href={"/on-sale"}>On Sale</Link>
        <Link href={"/new-arrivals"}>New Arrivals</Link>
        <Link href={"/brands"}>Brands</Link>
        <div className={styles.searchBar}>
          <button>
            <Image
              className={styles.searchButton}
              src={searchIcon}
              width={30}
              height={30}
            />
          </button>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Search for products..."
          />
        </div>
        <div>cart</div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default Navbar;
