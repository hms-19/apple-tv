import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  
  const bannerRef = useRef(null);
  const [fix, setFix] = useState(false);
  useEffect(() => {
    if (bannerRef && bannerRef.current) {
      bannerRef.current.play();
    }
  }, [bannerRef]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setFix(true);
      } else {
        setFix(false);
      }
    });
  }, []);
  return (
    <>
      <div
        style={{
          position: fix ? "fixed" : "absolute",
          top: 0,
          zIndex: 10,
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <video loop ref={bannerRef} muted>
          <source
            src="https://res.cloudinary.com/dianqv0gp/video/upload/v1680152557/apple_kwmjv8.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Banner;
