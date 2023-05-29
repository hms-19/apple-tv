import React from "react";
import styles from "../styles/Navbar.module.scss";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ open, onChange }) => {
  return (
    <div
      className={styles.sidebar}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
          }}
          onClick={() => onChange(false)}
        >
          <IoCloseOutline style={{ color: "#fff", fontSize: "26px" }} />
        </button>
      </div>
      <div>
        <ul>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
