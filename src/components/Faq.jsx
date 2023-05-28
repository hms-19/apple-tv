import React, { useState } from "react";
import styles from "../styles/Faq.module.scss";

import { GrUp, GrDown } from "react-icons/gr";
import { motion } from "framer-motion";
const Faq = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.faq}
    >
      <div className={styles.main} onClick={() => setOpen(!open)}>
        <h4 className={styles.subtitle}>{title}</h4>
        {open ? (
          <GrUp className={styles.icon} />
        ) : (
          <GrDown className={styles.icon} />
        )}
      </div>
      {open && <p className={styles.text}>{description}</p>}
    </div>
  );
};

export default Faq;
