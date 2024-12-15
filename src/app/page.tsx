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


      <FadeInSection key="f2" >
        <Message />
        <Divider />
      </FadeInSection>

     

      <FadeInSection key="f3" >
        <MiddleImage />
      </FadeInSection>

      <Divider />

      <FadeInSection key="f4" >
        <Calendar />
      </FadeInSection>

      <Divider />

      <FadeInSection key="f5" >
        <Gallery />
      </FadeInSection>

      <Divider />

      <FadeInSection key="f6" >
        <Location />
      </FadeInSection>

      <Divider />

      <FadeInSection key="f7" >
        <Account />
      </FadeInSection>

      <Divider />
      <Footer />
      <Music />
      <TopButton />
    </div>
  );
}

