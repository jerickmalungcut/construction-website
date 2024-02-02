import HeroImg1 from "../assets/hero1.jpg";
import HeroImg2 from "../assets/hero2.gif";
import HeroImg3 from "../assets/hero3.gif";

const Hero = () => {
  return (
    <section className="max-w-screen-xl flex md:flex-row flex-col-reverse gap-12 items-center mx-auto py-16 px-6">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-3 md:leading-[3rem] lg:leading-[4rem]">
          Building Dreams, Crafting Homes
        </h2>
        <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5">
          Turning dreams into homes. Explore our exceptional craftsmanship and
          envision your perfect space.
        </p>

        <button className="primary-btn">Explore Our Projects</button>
      </div>

      <div className="flex justify-center gap-2 md:gap-3 lg:gap-5">
        <img src={HeroImg1} alt="Hero Image 1" className="hero-img" />
        <img src={HeroImg2} alt="Hero Image 1" className="hero-img mt-[5%]" />
        <img src={HeroImg3} alt="Hero Image 1" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
