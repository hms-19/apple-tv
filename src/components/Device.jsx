import Image from "next/image";
import React from "react";
import styles from "../styles/Device.module.scss";
import logo from "../assets/logo.png";
import { devices } from "@/data/device";

const Device = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image src={logo} layout="fill" alt="appleTV" placeholder="blur" />
      </div>
      <h1 className={styles.title}>
        Watch Apple TV+ anywhere on the Apple TV app.
      </h1>
      <div>
        <p className={styles.text}>
          Find the Apple TV app on your favorite Apple devices.
        </p>
        <p className={styles.text}>
          Or watch Apple TV+ online at <a>tv.apple.com.</a>
        </p>
      </div>
      <div className={styles.grid_layout}>
        { devices.length > 0 && devices.map((item, index) => (
            <div key={index} className={styles.gridImgContainer}>
              <Image src={item} layout="fill" alt='apple tv+' placeholder="blur" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Device;
