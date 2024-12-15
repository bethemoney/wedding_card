import Calendar from "@/components/calendar";
import Divider from "@/components/divider";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Account from "@/components/account";
import Location from "@/components/location";
import Main from "@/components/main";
import Message from "@/components/message";
import Music from "@/components/ui/music";
import TopButton from "@/components/ui/top-button";
import SnowFall from "@/components/snowfall";
import MiddleImage from "@/components/middle-image";
import React from "react";
import FadeInSection from "@/components/fadein_section";

export default function Home() {

  return (
    <div className="max-w-2xl mx-auto">

      <SnowFall />
      <Main />
      <Divider />
      <Message />
      <Divider />
      <MiddleImage />
      <Divider />
      <Calendar />
      <Divider />
      <Gallery />
      <Divider />
      <Location />
      <Divider />
      <Account />
      <Divider />
      <Footer />
      <Music />
      <TopButton />
    </div>
  );
}

