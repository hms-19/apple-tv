import Image from "next/image";
import React from "react";
import styles from "../styles/Bundle.module.scss";
import product from "../assets/product.png";

const Bundle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.order1}>
          <div className={styles.img_container}>
            <Image
              src={product}
              layout="fill"
              placeholder="blur"
              alt="product"
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.mainTitle}>
            <i className="ri-apple-fill"></i>
            <span>One</span>
          </div>
          <p className={styles.text}>
            Bundle Apple TV+ with up to five other great services. And enjoy
            more for less.
          </p>
          <div>
            <button>Try Apple One Free</button>
            <br />
            <a className={styles.link}>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
