import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Yaptiklarimiz from "@/components/Yaptiklarimiz";
import Blog from "@/components/Blog";
import SeoFaq from "@/components/SeoFaq";
import Cta from "@/components/Cta";

export const revalidate = 0;

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Process />
      <Services />
      <Yaptiklarimiz />
      <Testimonials />
      <Blog />
      <SeoFaq />
      <Cta />
    </>
  );
}
