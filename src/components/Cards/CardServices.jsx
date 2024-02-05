import PropTypes from "prop-types";

const CardServices = ({ imgUrl, title, description }) => {
  return (
    <div className="bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row">
      <div className="flex-1 max-h-96 w-full">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-80 md:h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="p-10">
          <h6 className="text-lg md:text-xl text-darkBlue font-medium mb-3">
            {title}
          </h6>
          <p className="text-sm leading-6 text-darkBlue whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

CardServices.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardServices;
