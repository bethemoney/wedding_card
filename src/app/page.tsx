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
import ConfettiUi from "@/components/confetti";
import SnowFall from "@/components/snowfall";

export default function Home() {
 

  return (
    <div>
      <SnowFall />
      <Main />
      <Divider />
      <Message />
      <Divider />
      <Calendar />
      <Divider />
      <Location />
      <Divider />
      <Gallery />
      <Divider />
      <Account />
      <Divider />

      <Footer />
      <Music />
      <TopButton />
    </div>
  );
}
