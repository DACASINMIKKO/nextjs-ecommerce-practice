import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import mail from "../../public/mail.png";
import Social from "../../public/Social.png";
import Badge1 from "../../public/Badge1.png";
import Badge2 from "../../public/Badge2.png";
import Badge3 from "../../public/Badge3.png";
import Badge4 from "../../public/Badge4.png";
import Badge5 from "../../public/Badge5.png";

const Footer = () => {
  const footerDetailsArr = [
    { title: "COMPANY", desc: ["About", "Features", "Works", "Career"] },
    {
      title: "HELP",
      desc: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "FAQ",
      desc: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
      title: "RESOURCES",
      desc: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
  ];

  const badgeArr = [
    { id: 1, pic: Badge1 },
    { id: 2, pic: Badge2 },
    { id: 3, pic: Badge3 },
    { id: 4, pic: Badge4 },
    { id: 5, pic: Badge5 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.subscribeSection}>
        <div className={styles.stayUptoDate}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className={styles.subscribeInputs}>
          <div className={styles.mailInputContainer}>
            <Image
              className={styles.mailImage}
              src={mail}
              width={24}
              height={24}
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Enter your email adress"
            />
          </div>
          <button className={styles.inputs}>Subscribe to Newsletter</button>
        </div>
      </div>
      <div className={styles.footerDetails}>
        <div className={styles.detailsContainer}>
          <div
            style={{
              width: "248px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1 className={styles.footerShopTitle}>SHOP.CO</h1>
            <p className={styles.footerDesc}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <Image src={Social} width={148} height={28} />
          </div>

          {footerDetailsArr.map((item, i) => {
            return (
              <div className={styles.footerDescContainer} key={i}>
                <div className={styles.footerDescDetails}>{item.title}</div>
                {item.desc.map((desc) => {
                  return <div className={styles.descLinks}>{desc}</div>;
                })}
              </div>
            );
          })}
        </div>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={styles.footerShopCo}>
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {badgeArr.map((badge) => {
              return <Image key={badge.id} src={badge.pic} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
