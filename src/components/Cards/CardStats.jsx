import PropTypes from "prop-types";

const CardStats = ({ iconUrl, label, count }) => {
  return (
    <div className="min-w-48 flex flex-col items-center justify-center py-6 sm:py-14">
      <div className="w-14 h-14 flex justify-center items-center bg-lightBlue rounded-full ">
        <img src={iconUrl} alt={label} className="icon-img" />
      </div>

      <p>{count}</p>
      <span>{label}</span>
    </div>
  );
};

CardStats.propTypes = {
  iconUrl: PropTypes.string,
  label: PropTypes.string,
  count: PropTypes.string,
};

export default CardStats;
