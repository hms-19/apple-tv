import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import styles from "../styles/Navbar.module.scss";
import { menu } from "../data/menu";

const Navbar = ({ onChange }) => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div>
            <i className="ri-apple-fill"></i>
          </div>
          <ul>
            {
              menu.length &&
              menu.map((item, index) => <li key={index}>{item.value}</li>)}
            <button>
              <IoIosSearch style={{ fontSize: "18px" }} />
            </button>
            <button>
              <BsBag />
            </button>
            <button
              className={styles.mobile_menu}
              onClick={() => onChange(true)}
            >
              <HiOutlineMenuAlt4 style={{ fontSize: "18px" }} />
            </button>
          </ul>
        </div>
      </nav>
      <div className={styles.fixed_container}>
        <h2 style={{ fontWeight: 400 }}>Apple TV +</h2>
        <button>Stream Now</button>
      </div>
    </>
  );
};

export default Navbar;
