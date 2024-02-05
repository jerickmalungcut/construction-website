import HouseImg from "../assets/house-img.jpg";

const CallToAction = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="max-w-[1200px] h-auto mx-auto flex flex-col md:flex-row items-start md:h-[400px] min-[1090px]:h-[320px] ">
        <img
          src={HouseImg}
          alt="Image of a house"
          className="w-full md:w-1/2 md:h-full object-cover"
        />

        <div className="p-10">
          <h5 className="text-2xl font-medium text-darkBlue mb-2 lg:mb-4">
            Find Out What It Costs
          </h5>
          <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
            Curious about the investment required for your construction project?
            At TerraForm Construction, transparency is a cornerstone of our
            service. To get a clear understanding of the costs involved, we
            invite you to connect with our experienced team. Whether you&apos;re
            envisioning a residential masterpiece, a commercial space, or an
            industrial facility, our experts are ready to provide detailed cost
            estimates tailored to your unique project requirements. Reach out
            today, and let&apos;s embark on the journey of bringing your
            construction dreams to life with a clear and comprehensive
            understanding of what it costs.
          </p>
          <button className="primary-btn">Get Estimation</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
