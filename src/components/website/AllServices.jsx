import React, { useState } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const AllServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const services = allServices.slice(0, length || allServices.length);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <section className="bg-secondary/5 ">
      <div className="wrapper py-[5rem] flex flex-col gap-5 items-center">
        <SubHeading heading="Our Services" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          From Concept to Reality: Building Tomorrow's Solutions Today
        </h2>
        <p data-aos="fade-up" className="desc max-w-4xl mx-auto text-center">
          Welcome to our innovative Information Technology company, where we
          specialize in a wide range of cutting-edge services to meet the
          diverse needs of our clients. Our team of experts is dedicated to
          delivering high-quality solutions in{" "}
          <b>{allServices.map((service) => service.title).join(", ")}</b>.
        </p>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-primary/20 rounded-lg p-5 flex text-center flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                <service.icon className="w-[5rem] h-[5rem] fill-primary" />
                <h6 className="text-xl font-medium mt-2">{service.title}</h6>
                <p className="desc mt-2">{service.description}</p>
              </div>
              <button
                onClick={() => handleSelectServiceToShowDetail(service)}
                className="primary-btn mt-5 w-fit mx-auto"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        {length && (
          <div data-aos="fade-up">
            <Link to="/services" className="secondary-btn mt-5 w-fit mx-auto">
              More Services
            </Link>
          </div>
        )}
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          direction="top"
          className="p-4 z-10 w-screen"
          lockBackgroundScroll
        >
          <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary_text text-[2.2rem]"
            >
              <X size={30} />
            </button>
          </div>
          <div className="wrapper flex flex-col gap-6 tex-white pb-[2rem]">
            <h1 className="heading-2">{selectedService.detailHeading}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedService.detailContent,
              }}
            ></div>
          </div>
        </Drawer>
      </div>
    </section>
  );
};

export default AllServices;
