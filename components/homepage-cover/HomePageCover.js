import Image from "next/image";
import backgroundModel from "../../public/homepageModel.jpeg";
import styles from "./homePageCover.module.css";

const HomePageCover = () => {
  const bottomDescArr = [
    {
      id: 1,
      title: "2,00+",
      desc: "International Brands",
    },
    {
      id: 2,
      title: "2,000+",
      desc: "High-Quality Products",
    },
    {
      id: 3,
      title: "30,000+",
      desc: "Happy Customers",
    },
  ];

  const botDescStyle = (item) =>
    item.id === 2
      ? {
          borderWidth: 2,
          paddingRight: 32,
          paddingLeft: 32,
          borderColor: "#0000001A",
          borderTop: "none",
          borderBottom: "none",
        }
      : null;
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.findClothes}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div className={styles.description}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style
        </div>
        <div>
          <button className={styles.shopNowButton}>Shop Now</button>
        </div>
        <div className={styles.bottomDesc}>
          {bottomDescArr.map((item) => {
            return (
              <div key={item.id} style={botDescStyle(item)}>
                <div className={styles.bottomDescTitle}>{item.title}</div>
                <div className={styles.bottomDescDesc}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={backgroundModel}
          width={720}
          height={663}
          className={styles.modelImage}
        />
      </div>
    </div>
  );
};

export default HomePageCover;
