import React from "react";
import Calvin from "../../public/Calvin.png";
import Versace from "../../public/Versace.png";
import Gucci from "../../public/Gucci.png";
import Zara from "../../public/Zara.png";
import Prada from "../../public/Prada.png";
import Image from "next/image";
import styles from "./brands.module.css";

const BrandsComponent = () => {
  const brands = [
    { id: 1, pic: Versace },
    { id: 2, pic: Zara },
    { id: 3, pic: Gucci },
    { id: 4, pic: Prada },
    { id: 5, pic: Calvin },
  ];
  return (
    <div className={styles.container}>
      {brands.map((brand) => {
        return (
          <div key={brand.id}>
            <Image src={brand.pic} layout="intrinsic" alt="brandImages" />
          </div>
        );
      })}
    </div>
  );
};

export default BrandsComponent;
