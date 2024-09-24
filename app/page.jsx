import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Subscription from "@/components/Subscription";
import HomeLayout from "@/layouts/homeLayout/HomeLayout";

export default function Home() {
  return (
    <>
      <HomeLayout>
        <Hero />
        <Community />
        <Subscription />
      </HomeLayout>
    </>
  );
}
