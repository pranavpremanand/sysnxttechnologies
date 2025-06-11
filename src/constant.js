import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/IOT.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Data analytics.svg";
import { ReactComponent as allServiceIcon7 } from "./assets/svgs/services/Game Development.svg";
import { ReactComponent as allServiceIcon8 } from "./assets/svgs/services/IT solutions.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

export { logoImg };

export const companyDetails = {
  phone: "+919148264137",
  address:
    "Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka - 560008",
  email: "info@sysnxttechnologies.com",
  linkedin: "https://www.linkedin.com/company/sysnxt-technologies/",
  instagram: "https://www.instagram.com/sysnxttechnologies/",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Boost your online business with custom e-commerce solutions designed to enhance customer engagement, streamline operations, and increase revenue.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Create captivating social media websites that engage your audience and foster brand loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      "Design high-converting landing pages that capture attention and drive user actions, showcasing your brand’s message effectively.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Develop tailor-made websites that meet your unique business needs, blending creativity and functionality for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Build robust and efficient iOS apps using Swift and Objective-C, optimized for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "Design and develop custom Android apps that align with your vision and business goals, using Java and Kotlin for robust performance.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Utilize Flutter to create apps for both iOS and Android with a single codebase, overcoming web app architecture challenges with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "Develop feature-rich hybrid apps that work seamlessly across iOS and Android devices, tailored to your business needs.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Jennifer P",
    position: "Marketing Director, Global E-commerce Solutions",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Working with SysNxt Technologies on our website redesign was an excellent experience. They not only delivered a visually appealing, mobile-friendly site but also ensured that it was highly optimized for speed and performance. The result is a significant increase in user engagement and a noticeable uptick in conversions. Their team was communicative, professional, and delivered on time, which made the entire process smooth and stress-free.”",
  },
  {
    id: 2,
    name: "David L",
    position: "CEO, HealthTrack App Solutions",
    img: require("./assets/images/testimonial1.png"),
    desc: "“We approached SysNxt Technologies to develop a mobile app for our business, and the results exceeded our expectations. The app is intuitive, seamless, and has been a huge hit with our users. The team’s attention to detail and ability to translate our vision into a functional product was impressive. Their continuous support and updates have also made sure that the app evolves with our business needs.”",
  },
  {
    id: 3,
    name: "Emily G",
    position: "Product Manager, SmartHome Innovations",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The UI/UX design work from SysNxt Technologies truly transformed the user experience of our platform. They took the time to understand our customer base and designed an interface that is not only easy to navigate but also visually engaging. The result has been a 30% improvement in user retention, and we’ve received positive feedback from our customers about the new design. The team was collaborative and delivered exactly what we envisioned.”",
  },
  {
    id: 4,
    name: "Chris B",
    position: "Head of Customer Experience, TechBridge Communications",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“The AI solutions provided by SysNxt Technologies have revolutionized how we handle customer support. By integrating AI-powered chatbots and predictive analytics into our workflow, we’ve drastically reduced response times and improved service quality. The AI system has also helped us analyze customer behavior and fine-tune our marketing strategies. Working with their team has been a game-changer for our business.”",
  },
  {
    id: 5,
    name: "Sophia T",
    position: "Chief Data Officer, RetailX Enterprises",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“We collaborated with SysNxt Technologies to develop a mobile game, and they brought our creative vision to life in an incredible way. From game mechanics to design, their team understood what we wanted and executed it flawlessly. The game launched with excellent reviews, and we’ve seen steady downloads and player retention. Their expertise in game development, combined with their focus on user experience, has been a key factor in its success.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We create highly functional, visually appealing websites tailored to your business goals.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Transforming Your Online Presence",
    detailContent: `<p>Our web development services are designed to help businesses thrive online. We focus on delivering custom, scalable, and secure solutions to meet your unique needs:</p>
      <br/>
      <ol>
        <li><b>Custom Web Development:</b><br/>Tailored websites that align with your brand and objectives.</li>
        <br/>
        <li><b>Performance Optimization:</b><br/> Fast-loading, secure websites that provide an exceptional user experience.</li>
        <br/>
        <li><b>Scalability:</b><br/> Websites built to grow with your business.</li>
      </ol>
      <br/>
      <p>From e-commerce to corporate websites, we deliver platforms that drive results and enhance engagement.</p>`,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We design and build intuitive mobile apps that deliver seamless user experiences across platforms.",
    icon: allServiceIcon2,
    detailHeading:
      "Mobile App Development: Next-Gen Solutions for Your Business",
    detailContent: `<p>Our app development services are crafted to meet your business needs and deliver exceptional user experiences:</p>
      <br/>
      <ol>
        <li><b>Native Apps:</b><br/> Optimized for iOS and Android platforms.</li>
        <br/>
        <li><b>Cross-Platform Apps:</b><br/> Unified solutions for broader audience reach.</li>
        <br/>
        <li><b>Feature-Rich Experiences:</b><br/> Apps integrated with advanced functionalities like push notifications and payments.</li>
      </ol>
      <br/>
      <p>From concept to deployment, we create mobile apps that engage and deliver value.</p>`,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design user-focused interfaces that enhance usability and delight your audience.",
    icon: allServiceIcon3,
    detailHeading: "UI/UX Design: Elevating User Experiences",
    detailContent: `<p>Our design process ensures that your digital platforms are intuitive and visually compelling:</p>
      <br/>
      <ol>
        <li><b>User Research:</b><br/> Understanding user behavior to inform design decisions.</li>
        <br/>
        <li><b>Prototyping:</b><br/> Interactive prototypes for testing and validation.</li>
        <br/>
        <li><b>Pixel-Perfect Design:</b><br/> Stunning visuals combined with seamless functionality.</li>
      </ol>
      <br/>
      <p>We create designs that resonate with your audience and drive engagement.</p>`,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "We harness the power of AI to create smart, automated solutions for your business challenges.",
    icon: allServiceIcon4,
    detailHeading:
      "Artificial Intelligence: Smart Solutions for Smarter Businesses",
    detailContent: `<p>Our AI-driven services help businesses automate and innovate:</p>
      <br/>
      <ol>
        <li><b>Machine Learning:</b><br/> Leveraging data to uncover insights and drive decision-making.</li>
        <br/>
        <li><b>Chatbots:</b><br/> Intelligent, conversational interfaces for customer support.</li>
        <br/>
        <li><b>Automation:</b><br/> Streamlining processes to save time and resources.</li>
      </ol>
      <br/>
      <p>We empower your business with AI solutions that deliver measurable outcomes.</p>`,
  },
  {
    id: 5,
    title: "IoT (Internet of Things)",
    description:
      "We connect devices and systems to drive innovation and operational efficiency.",
    icon: allServiceIcon5,
    detailHeading: "IoT: Smart Connectivity for Modern Businesses",
    detailContent: `<p>Our IoT solutions help businesses unlock the potential of connected devices:</p>
      <br/>
      <ol>
        <li><b>Custom IoT Solutions:</b><br/> Tailored to your unique business needs.</li>
        <br/>
        <li><b>Real-Time Monitoring:</b><br/> Insights and analytics to improve performance.</li>
        <br/>
        <li><b>Seamless Integration:</b><br/> Connecting devices for smarter decision-making.</li>
      </ol>
      <br/>
      <p>We bring innovation to life with scalable IoT solutions that enhance efficiency and productivity.</p>`,
  },
  {
    id: 6,
    title: "Data Analytics & Business Intelligence",
    description:
      "We provide actionable insights through advanced analytics and visualization tools.",
    icon: allServiceIcon6,
    detailHeading:
      "Data Analytics & Business Intelligence: Transforming Data into Strategy",
    detailContent: `<p>Our analytics services help you make informed decisions and drive growth:</p>
      <br/>
      <ol>
        <li><b>Predictive Analytics:</b><br/> Forecasting trends and customer behavior.</li>
        <br/>
        <li><b>Data Visualization:</b><br/> Clear, impactful dashboards for better decision-making.</li>
        <br/>
        <li><b>Custom Solutions:</b><br/> Tailored analytics to meet your business needs.</li>
      </ol>
      <br/>
      <p>We help businesses turn raw data into actionable strategies for success.</p>`,
  },
  {
    id: 7,
    title: "Game Development",
    description:
      "We craft immersive games that captivate players and push creative boundaries.",
    icon: allServiceIcon7,
    detailHeading: "Game Development: Turning Ideas into Interactive Realities",
    detailContent: `<p>Our game development services bring your vision to life with stunning experiences:</p>
      <br/>
      <ol>
        <li><b>Creative Design:</b><br/> Engaging storylines and immersive environments.</li>
        <br/>
        <li><b>Multi-Platform Support:</b><br/> Games optimized for mobile, PC, and consoles.</li>
        <br/>
        <li><b>Cutting-Edge Technology:</b><br/> Utilizing tools like Unity and Unreal Engine.</li>
      </ol>
      <br/>
      <p>We deliver games that entertain, engage, and inspire players worldwide.</p>`,
  },
  {
    id: 8,
    title: "Managed IT Solutions",
    description:
      "We provide comprehensive IT support to ensure your business runs smoothly.",
    icon: allServiceIcon8,
    detailHeading:
      "Managed IT Solutions: Reliable Support for Seamless Operations",
    detailContent: `<p>Our managed IT services ensure your business stays secure and efficient:</p>
      <br/>
      <ol>
        <li><b>24/7 Support:</b><br/> Around-the-clock monitoring and assistance.</li>
        <br/>
        <li><b>Cybersecurity:</b><br/> Protecting your systems from threats.</li>
        <br/>
        <li><b>Scalable Solutions:</b><br/> IT services that grow with your business.</li>
      </ol>
      <br/>
      <p>From cloud management to infrastructure support, we’ve got your IT needs covered.</p>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
