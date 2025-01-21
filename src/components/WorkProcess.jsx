import SubHeading from "./SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/Consult & Strategize.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/Design & Develop.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/Testing & Launch.svg";
import { ReactComponent as Icon4 } from "../assets/svgs/Ongoing Support & Maintenance.svg";

const workflow = [
  {
    id: 1,
    icon: Icon1,
    title: "Consult & Strategize",
    desc: "We begin by understanding your business, audience, and goals to create a website strategy that aligns with your vision and long-term objectives.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Design & Develop",
    desc: "Our team collaborates to design and develop a website that balances aesthetics with functionality, ensuring top-tier performance.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Testing & Launch",
    desc: "We thoroughly test your website for speed, security, and usability before going live, ensuring a smooth and successful launch.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Ongoing Support & Maintenance",
    desc: "Post-launch, we provide continuous support, updates, and maintenance to keep your site running efficiently as your business grows.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-[3rem] flex justify-center relative">
      <div className="blurred-blue left-[-10%] bottom-[-10%]"></div>
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col items-center gap-5 z-10 py-10"
      >
        <SubHeading heading="Work Process" />
        <h1
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          How We Work
        </h1>
        <div className="z-10 grid grid-cols-1 mt-4 sm:grid-cols-2 gap-4 sm:gap-10 mx-auto max-w-6xl">
          {workflow.map((item) => (
            <div className="relative shadow-inner shadow-primary/40 bg-primary/5 hover:bg-primary/10 rounded-lg p-6 overflow-hidden">
              <div className="absolute left-3 top-3 text-[2rem] transition-all duration-300 -z-0 flex justify-center items-center h-[3rem] w-[3rem] rounded-full bg-secondary">
                <span className="text-white font-extrabold">{item.id}</span>
              </div>
              <div className="hover:scale-[95%] transition-all duration-300 flex flex-col gap-2 items-center">
                <item.icon className="z-10 w-[4rem] h-[4rem] fill-primary" />
                <h6 className="z-10 font-medium text-2xl text-center">
                  {item.title}
                </h6>
                <p className="z-10 text-primary_text text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
