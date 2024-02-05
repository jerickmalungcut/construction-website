import { useRef, useState } from "react";
import { TESTIMONIALS } from "../utils/data";
import CardTestimonials from "./Cards/CardTestimonials";
import Slider from "react-slick";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import Pagination from "./Pagination/Pagination";

const Testimonials = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  //For slick react slider imported on main.jsx
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    // To set the reponsiveness
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    // To activate the arrow buttons
    beforeChange: (index) => {
      setCurrentSlide(index);
    },
  };

  //   Right button
  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  //   Left Button
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="testimonials" className="max-w-[1200px] py-16 mx-auto">
      {/* Heading */}
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">
        Testimonials
      </h5>

      {/* Testimonial Slider */}
      <div className="relative mb-7 px-5 md:px-10">
        <Slider ref={sliderRef} {...settings}>
          {TESTIMONIALS.map((item) => (
            <CardTestimonials
              key={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              review={item.review}
              description={item.description}
            />
          ))}
        </Slider>

        {/* Buttons */}
        <button
          onClick={slideLeft}
          className="arrow-btn left-1 md:left-5 lg:left-2"
        >
          <RiArrowLeftSLine size={24} color="white" />
        </button>

        <button
          onClick={slideRight}
          className="arrow-btn right-1 md:right-5 lg:right-2"
        >
          <RiArrowRightSLine size={24} color="white" />
        </button>
      </div>

      {/* Pagination */}
      <Pagination active={currentSlide} />
    </section>
  );
};

export default Testimonials;
