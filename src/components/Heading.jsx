import React from "react";
import Head from "next/head";
import logo from '../assets/logo.png'

const Heading = () => {
  return (
    <>
      <Heading>
        <title>Apple TV Plus</title>
        <meta property="og:title" content="Apple TV Plus" key="title" />
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Heading>
    </>
  );
};

export default Head;
