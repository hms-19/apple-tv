import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Faq.module.scss";
import Faq from "./Faq";
import { getFaq } from "@/features/faq/faqSlice";

const FaqList = () => {
  const data = useSelector(getFaq);
  return (
    <div className={styles.faq_container}>
      <h1 className={styles.title}>Questions? Answers.</h1>
      <>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <Faq key={index} title={item.title} description={item.description} />
          ))}
      </>
    </div>
  );
};

export default FaqList;
