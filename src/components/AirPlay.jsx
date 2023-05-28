import Image from "next/image";
import React from "react";
import styles from "../styles/AirPlay.module.scss";
import tv4k from "../assets/tv4k.png";
import appleTV from "../assets/appleTV.png";
import airPlay from "../assets/airPlay.png";
const AirPlay = () => {
  return (
    <div className={styles.airplay_container}>
      <div className={styles.fourK}>
        <div>
          <div className={styles.imageContainer}>
            <Image
              src={tv4k}
              layout="fill"
              alt="fourk"
              placeholder="blur"
            />
          </div>
          <div className={styles.textContainer}>
            <p>The Apple experience.</p>
            <p>Cinematic in every sense.</p>
          </div>
          <div className={styles.buttonContainer}>
            <button>Buy</button>
            <a>Learn more</a>
          </div>
        </div>
        <div>
          <div className={styles.boxImageContainer}>
            <Image
              src={appleTV}
              layout="fill"
              alt="appleTV"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className={styles.fourK}>
        <div>
          <div className={styles.imageContainer}>
            <h1>AirPlay</h1>
          </div>
          <div className={styles.textContainer}>
            <p>Bring Apple TV+ to</p>
            <p>a screen near you.</p>
          </div>
          <div className={styles.buttonContainer}>
            <a>Learn more</a>
          </div>
        </div>
        <div>
          <div className={styles.boxImageContainer} style={{ width: "90%" }}>
            <Image
              src={airPlay}
              layout="fill"
              alt="appleTV"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirPlay;
