import PropTypes from "prop-types";

const CardStats = ({ iconUrl, label, count }) => {
  return (
    <div className="min-w-48 flex flex-col items-center justify-center py-6 sm:py-14">
      <div className="w-14 h-14 flex justify-center items-center bg-blue-600 rounded-full ">
        <img
          src={iconUrl}
          alt={label}
          className="icon-img"
          height="30"
          width="30"
        />
      </div>

      <p className="text-xl md:text-2xl text-white font-medium mt-4">{count}</p>
      <span className="text-sm md:text-md text-white mt-1">{label}</span>
    </div>
  );
};

CardStats.propTypes = {
  iconUrl: PropTypes.string,
  label: PropTypes.string,
  count: PropTypes.string,
};

export default CardStats;
