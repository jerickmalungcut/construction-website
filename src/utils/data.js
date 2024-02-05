import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import Icon4 from "../assets/icon4.svg";

import ServiceImg1 from "../assets/service-img3.jpg";
import ServiceImg2 from "../assets/service-img2.jpg";
import ServiceImg3 from "../assets/service-img1.jpg";

import GalleryImg1 from "../assets/gallery-img1.jpg";
import GalleryImg2 from "../assets/gallery-img2.jpg";
import GalleryImg3 from "../assets/gallery-img3.jpg";
import GalleryImg4 from "../assets/gallery-img4.jpg";
import GalleryImg5 from "../assets/gallery-img5.jpg";
import GalleryImg6 from "../assets/gallery-img6.jpg";

import ProfileImg1 from "../assets/person1.jpg";
import ProfileImg2 from "../assets/person2.jpg";
import ProfileImg3 from "../assets/person3.jpg";

export const STATS_DATA = [
  { iconUrl: Icon1, count: "1M+", label: "Sqft Area Constructed" },
  { iconUrl: Icon2, count: "180", label: "Sqft Area Constructed" },
  { iconUrl: Icon3, count: "25", label: "Years of Experience" },
  { iconUrl: Icon4, count: "151", label: "Trained Professionals" },
];

export const SERVICES = [
  {
    imgUrl: ServiceImg1,
    title: "Pre-Construction",
    description:
      "At TerraForm Constructions, our commitment to excellence begins even before the first brick is laid. Our pre-construction services are meticulously designed to lay the groundwork for success. From thorough site analysis to comprehensive budgeting and scheduling, we prioritize planning to ensure a seamless construction process. Our team collaborates closely with clients, architects, and engineers, addressing challenges proactively and optimizing project outcomes. Trust us to pave the way for a successful construction journey with our detailed pre-construction expertise.",
  },
  {
    imgUrl: ServiceImg2,
    title: "General Contracting",
    description:
      "When it comes to construction, our General Contracting services at TerraForm Constructions stand as a testament to our dedication to quality and efficiency. With a wealth of experience and a commitment to client satisfaction, we oversee every aspect of the construction process. From managing subcontractors to ensuring adherence to timelines and budgets, our general contracting team takes charge to bring your vision to life. Expect unparalleled professionalism, attention to detail, and a final product that exceeds expectations when you choose us for your construction needs.",
  },
  {
    imgUrl: ServiceImg3,
    title: "Design Build",
    description:
      "TerraForm Constructions is your partner in creating exceptional spaces from concept to completion through our Design Build services. Our integrated approach combines design and construction seamlessly, streamlining communication and eliminating the challenges of dealing with separate entities. With a team of talented architects, designers, and builders working collaboratively, we ensure your vision is not only realized but enhanced. From initial concepts to the finishing touches, our Design Build services deliver a cohesive and efficient construction experience, resulting in spaces that inspire and endure.",
  },
];

export const GALLERY_IMGS = [
  { id: "01", imgUrl: GalleryImg1 },
  { id: "02", imgUrl: GalleryImg2 },
  { id: "03", imgUrl: GalleryImg3 },
  { id: "04", imgUrl: GalleryImg4 },
  { id: "05", imgUrl: GalleryImg5 },
  { id: "06", imgUrl: GalleryImg6 },
];

export const TESTIMONIALS = [
  {
    id: "01",
    imgUrl: ProfileImg1,
    name: "Michael P.",
    review: "It was a great experience",
    description:
      "TerraForm Construction transformed our dream home into a reality! From the detailed pre-construction planning to the flawless execution during the general contracting phase, their team exhibited unmatched professionalism. The attention to detail, adherence to timelines, and the exceptional quality of work surpassed our expectations. TerraForm Construction is our go-to for any future construction needs!",
  },
  {
    id: "02",
    imgUrl: ProfileImg2,
    name: "Eric S.",
    review: "Incredible Journey. Highly recommended!",
    description:
      "TerraForm Construction truly impressed us with their design-build services. The seamless integration of design and construction made the entire process stress-free. Their team of architects and builders collaborated effortlessly, resulting in a space that exceeded our vision. The attention to aesthetics and functionality was outstanding. We highly recommend TerraForm Construction for their expertise and commitment to excellence!",
  },
  {
    id: "03",
    imgUrl: ProfileImg3,
    name: "Mike T.",
    review: "Truly Great. Exceeded expectations",
    description:
      "TerraForm Construction is synonymous with construction excellence. Our project was managed with precision, and their general contracting services ensured a smooth and efficient build. The professionalism exhibited by the entire team, from project managers to on-site workers, was commendable. Budget adherence and timely completion made our experience with TerraForm Construction truly exceptional.",
  },
];
