"use client";
import { motion } from "framer-motion";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

export default function Footer() {
  const pathname = usePathname();

  const disableFooterOn =
    pathname.startsWith("/students") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/agents") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/signin");
  return !disableFooterOn ? (
    <section className=" overflow-hidden">
      <div
        style={{
          background: "url(/footer/background.svg) no-repeat  center/cover ",
        }}
        className=" h-[114vh] sm:h-[90vh] bottom-0 xl:-bottom-40   relative  w-full  "
      >
        <section
          //   style={{
          //     background: "url(/footer/bridge.svg) no-repeat   center/contain",
          //   }}
          className=" h-full  max-w-7xl mx-auto  absolute  top-10 sm:top-[26%] left-[5%] right-[5%] z-40"
        >
          <div className=" grid gap-8 lg:gap-14 xl:gap-20  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5    text-white">
            {/* FIRST MENU */}
            <div className=" flex flex-col gap-4">
              <Link
                href={"/"}
                className=" flex gap-2 items-center  text-white whitespace-nowrap"
              >
                <img className=" w-12 h-12" src="/footer/whiteLogo.svg" />
                <div className=" flex flex-col ">
                  <span className="  text-2xl font-bold leading-6 ">
                    Future Bridged
                  </span>
                  <span className=" text-[14px]   font-bold">
                    Educational Consultancy
                  </span>
                </div>
              </Link>
              <div className=" flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <p>Bhaktapur, Nepal</p>
              </div>
              <div className=" flex items-center gap-2 text-sm">
                <Phone size={16} />
                <p>+977 9841488400</p>
              </div>
              <div className=" flex items-center gap-2 text-sm">
                <Mail className=" text-white" size={16} />
                <p>metalogic@gmail.com</p>
              </div>
            </div>
            {/* 2ND MENU */}
            <div className=" space-y-4">
              <h2 className=" font-bold">Company</h2>
              <ul className=" text-sm  space-y-4">
                <li>Feedback</li>
                <li>Partnership</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            {/* 3rd MENU */}
            <div className=" space-y-4">
              <h2 className=" font-bold">Join</h2>
              <ul className=" text-sm  space-y-4">
                <li>Careers</li>
                <li>Partnership</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            {/* 4th MENU */}
            <div className=" space-y-4">
              <h2 className=" font-bold">Quick Links</h2>
              <ul className=" text-sm  space-y-4">
                <li>Privacy Policy</li>
                <li>Partnership</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            {/* social  MENU */}
            <div className=" space-y-4 self-end  w-fit ">
              <h2 className=" font-bold text-sm">Join us on Social Media</h2>
              <ul className=" text-sm  flex gap-2">
                <li>
                  <Instagram size={25} />
                </li>
                <li>
                  <Facebook size={25} />
                </li>
                <li>
                  <Twitter size={25} />
                </li>
                <li>
                  <Youtube size={25} />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <motion.img
          animate={{
            x: [0, -50, 50, 0], // Define keyframes for left-right movement
            // y: [0, -50, 0, 0],
            rotate: ["0deg", "10deg", "0deg", "10deg"],
          }}
          transition={{
            duration: 4, // Duration of one complete cycle
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "reverse", // Loop the animation
            ease: "linear", // Easing function for smooth transition
          }}
          src="/footer/cap.png"
          alt="bridge"
          className="absolute w-20 sm:w-40 right-[5%]  top-0 md:top-[15%] rotate-12"
        />
        <img
          src="/footer/bridge.svg"
          alt="bridge"
          className="  left-0 scale-x-105 absolute  -bottom-14  sm:top-[80%] xl:top-[52%]   w-full h-40"
        />
      </div>
    </section>
  ) : (
    <></>
  );
}
