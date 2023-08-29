import React from "react";
import styles from "./BottomCover.module.css";
import Image from "next/image";
import Star from "../../public/Star.png";
import HalfStar from "../../public/HalfStar.png";

const BottomCover = ({ title, products }) => {
  const generateStars = (rating) => {
    const star = [];
    const floorRating = Math.floor(rating);
    for (let i = 0; i < floorRating; i++) {
      star.push(<Image src={Star} layout="intrinsic" />);
    }

    if (rating % 1 !== 0) {
      star.push(<Image src={HalfStar} layout="intrinsic" />);
    }

    return star;
  };

  return (
    <div className={styles.container}>
      <div className={styles.newArrivals}>{title}</div>
      <div className={styles.productsContainer}>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <Image
                className={styles.productsImage}
                src={item.picture}
                height={298}
                width={295}
              />
              <div className={styles.productName}>{item.name}</div>
              <div className={styles.rating}>
                <div style={{ marginRight: "13px", display: "flex" }}>
                  {generateStars(item.rating)}
                </div>
                {item.rating + " / 5"}
              </div>
              <div className={styles.price}>{"$ " + item.price}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <div></div>
    </div>
  );
};

export default BottomCover;
