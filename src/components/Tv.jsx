import Image from "next/image";
import React from "react";
import styles from "../styles/Device.module.scss";
import { images } from "../data/tv_images";

const Tv = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>
        See it on your smart TV or streaming device.
      </h1>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "-40px",
        }}
      >
        <a>Set up your device</a>
      </div>
      <div className={styles.grid_layout}>
        {
          images.length > 0 &&
          images.map((item, index) => (
            <div key={index} className={styles.sec_container}>
              <Image
                src={item}
                layout="fill"
                objectFit="contain"
                alt={item}
                placeholder="blur"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tv;
