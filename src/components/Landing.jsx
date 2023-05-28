import React from "react";
import Image from "next/image";
import styles from "../styles/Intro.module.scss";
import logo from "../assets/logo.png";
const Landing = () => {

  // const [scrollPos, setScrollPos] = React.useState(0)
  // React.useEffect(() => {
  //   setScrollPos(window.scrollY)
  // },[window.scrollY])

  return (
    <div
      className={styles.intro_section}
    >
      <h1>All Apple Originals.</h1>
      <h1 style={{ marginTop: "-45px" }}>Only on Apple TV+.</h1>
      <button>Stream now</button>
      <div className={styles.ad}>
        <p>Watch on the</p>
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "relative",
          }}
        >
          <Image placeholder="blur" src={logo} layout="fill" alt="logo" />
        </div>
        <p>app</p>
      </div>
    </div>
  );
};

export default Landing;
