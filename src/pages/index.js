import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Device from "../components/Device";
import Tv from "../components/Tv";
import Bundle from "../components/Bundle";
import Apple from "../components/Apple";
import FaqList from "../components/FaqList";
import AirPlay from "../components/AirPlay";
import Sidebar from "../components/Sidebar";
import Landing from "../components/Landing";

export default function Home() {
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onChange={setOpen} />
      {open && <Sidebar open={open} onChange={setOpen} />}
      <Landing />
      <div style={{minHeight: '100vh'}}></div>
      <Device />
      <Tv />
      <FaqList />
      <Bundle />
      <Apple />
      <AirPlay />
      <Footer />
      <Banner />
    </>
  );
}
