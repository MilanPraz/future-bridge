import FAQ from "@/components/Home/FAQ";
import Globe from "@/components/Home/Globe";
import Testimonials from "@/components/Home/Testimonials";
// import UniStats from "@/components/Home/UniStats";
import dynamic from "next/dynamic";
const UniStats = dynamic(() => import("@/components/Home/UniStats"), {
  ssr: false,
});
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { H1, H2, H3, H4, P } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building, Building2Icon } from "lucide-react";
import Image from "next/image";
import FadeUpNormal from "@/components/animation/FadeUpNormal";

export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <div
        style={{
          background: "url(/home/uni.png) center/cover ",
        }}
        className="clipper object-cover object-center -top-10   h-[90vh] relative"
      >
        <div className=" absolute  inset-0 bg-gradient-to-tr  from-primary from-15% via-transparent     to-transparent"></div>
        <div className="">
          <div className="  absolute top-[40%] sm:top-[30%] -translate-y-[50%] left-[2%] text-white  max-w-3xl  space-y-8  ">
            <FadeUpNormal delay={0.1}>
              <H1 className="headd text-white text-4xl lg:text-[64px] ">
                Bridging Paths to Success
              </H1>
            </FadeUpNormal>
            <FadeUpNormal delay={0.3}>
              <p className=" tracking-wide max-w-[80%] text-sm sm:text-lg font-semibold">
                Seamlessly connect with top global institutions through Future
                Bridged Educational Consultancy, where your educational dreams
                meet expert guidance.
              </p>
            </FadeUpNormal>
          </div>
        </div>
      </div>

      {/* Universities Details */}
      <UniStats />

      <Testimonials />
      <WhyChooseUs />
      <Globe />
      <FAQ />
    </main>
  );
}
