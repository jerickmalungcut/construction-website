import Gallery1 from "../assets/gallery-img1.jpg";
import Gallery2 from "../assets/gallery-img2.jpg";
import Gallery3 from "../assets/gallery-img3.jpg";
import Gallery4 from "../assets/gallery-img4.jpg";
import Gallery5 from "../assets/gallery-img5.jpg";
import Gallery6 from "../assets/gallery-img6.jpg";

const Work = () => {
  return (
    <section id="work" className="max-w-[1200px] pt-8 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">
        Our Work
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-2 gap-2">
        <div className="md:col-span-2 overflow-hidden">
          <img src={Gallery1} alt="Gallery1" className="gallery-img" />
        </div>
        <div className="overflow-hidden">
          <img src={Gallery2} alt="Gallery1" className="gallery-img" />
        </div>
        <div className="overflow-hidden">
          <img src={Gallery3} alt="Gallery1" className="gallery-img" />
        </div>
        <div className="overflow-hidden">
          <img src={Gallery4} alt="Gallery1" className="gallery-img" />
        </div>
        <div className="overflow-hidden">
          <img src={Gallery5} alt="Gallery1" className="gallery-img" />
        </div>
        <div className="md:col-span-2 overflow-hidden">
          <img src={Gallery6} alt="Gallery1" className="gallery-img" />
        </div>
      </div>
    </section>
  );
};

export default Work;
