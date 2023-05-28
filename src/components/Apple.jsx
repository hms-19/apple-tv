import Image from "next/image";
import React from "react";
import styles from "../styles/Bundle.module.scss";
import plan from "../assets/plan.png";
const Apple = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.main}
        style={{ padding: "120px 120px 60px 120px" }}
      >
        <div className={styles.textContainer}>
          <p
            className={styles.text}
            style={{
              textAlign: "start",
              width: "full",
              margin: 0,
            }}
          >
            The Apple Music Student Plan comes with Apple TV+ for free.4
          </p>
          <div
            className={styles.TVContainer}
            style={{ width: "full", textAlign: "start", marginTop: "-90px" }}
          >
            <button>Try Apple One Free</button>
          </div>
        </div>
        <div>
          <div className={styles.img_container2}>
            <Image src={plan} layout="fill" placeholder="blur" alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;
