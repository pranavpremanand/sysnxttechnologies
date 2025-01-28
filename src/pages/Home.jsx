import React from "react";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/UIUX Design.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/E-Commerce Development.svg";
import WorkProcess from "../components/WorkProcess";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/60 to-background"></div>
        <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading">
            Welcome to{" "}
            <span className="text-primary font-semibold block sm:inline">
              SysNxt Technologies
            </span>
          </p>
          <h1 className="heading capitalize">
            Transformative IT Solutions <br /> for a Digital Future
          </h1>
          <p className="sub-heading">
            Smart Solutions, Strong Ethics - Driving Innovation with Trust
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary/90 rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            We go beyond websites to create sophisticated, fully functional web
            applications tailored to your unique business requirements.
          </p>
        </div>
        <div className="bg-primary/90 rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">UI/UX Design</p>
          </div>
          <p className="desc">
            Our design team crafts intuitive, visually stunning interfaces that
            deliver a seamless user experience and keep visitors engaged.
          </p>
        </div>
        <div className="bg-primary/90 rounded-lg text-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              E-Commerce Development
            </p>
          </div>
          <p className="desc">
            Whether you're a small business or a large-scale online retailer, we
            deliver custom e-commerce platforms that boost your sales and
            enhance the shopping experience.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:block h-full">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="600"
                className="object-cover h-full rounded-lg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-center lg:items-start flex-col gap-7"
            >
              <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                Turning Visions into Reality
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-primary">
                    SysNxt Technologies
                  </span>
                  , we are committed to delivering cutting-edge IT solutions
                  tailored to meet the unique needs of our clients. Our team of
                  experts provides innovative technology services that drive
                  business into success.
                </p>
              </div>
              <div className="w-fit mt-4 justify-center lg:justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices length={3}/>
      <TrustWorthySection />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
