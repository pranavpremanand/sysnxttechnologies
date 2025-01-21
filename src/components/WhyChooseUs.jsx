import React from "react";
import bgImg from "../assets/images/bg-img.jpg";
import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon8 } from "../assets/svgs/SEO-Friendly.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Mobile-First, Responsive Design.svg";

const content = [
  {
    icon: icon5,
    title: "Comprehensive Solutions",
    desc: "Our approach ensures that every website is tailored to meet your unique business requirements, delivering a solution that is both distinctive and highly effective.",
  },
  {
    icon: icon2,
    title: "Responsive Mobile-First Design",
    desc: "We prioritize mobile users by designing websites that provide a seamless experience across all devices, including smartphones, tablets, and desktops.",
  },
  {
    icon: icon1,
    title: "Efficient and Secure",
    desc: "Our development process focuses on creating fast-loading, secure websites that are built to grow with your business, ensuring optimal performance and protection.",
  },
  {
    icon: icon8,
    title: "Optimized for SEO",
    desc: "We build websites with clean code and optimization techniques that enhance your search engine rankings, helping you reach a broader audience.",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center bg-cover min-h-[50vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-background/80"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl overflow-hidden bg-center bg-cover relative"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full bg-primary/5"></div>
          <div className="py-[3rem] px-5 bg-white/10 rounded-xl backdrop-blur-sm text-primary_text relative z-10">
            <h1
              data-aos="fade-up"
              className="heading-2_1 max-w-[60rem] mx-auto text-center"
            >
              Why Work With Us?
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex shadow-inner shadow-primary/40 flex-col group items-center gap-1 bg-background/70 rounded-xl p-5 transition-all duration-200"
                >
                  <item.icon className="w-[4.5rem] fill-primary h-[4.5rem] transition-all duration-200" />
                  <p className="text-center text-xl mt-2 font-semibold text-primary">
                    {item.title}
                  </p>
                  <p className="text-center leading-tight mt-2 desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
