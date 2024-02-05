import PropTypes from "prop-types";
import { TESTIMONIALS } from "../../utils/data";

const Pagination = ({ active }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {TESTIMONIALS.map((item, index) => (
        <div
          key={item.id}
          className={`w-8 h-1 ${
            active === index ? "bg-darkBlue" : "bg-blue-100"
          } rounded-md transition-all duration-500`}
        />
      ))}
    </div>
  );
};

Pagination.propTypes = {
  active: PropTypes.node,
};

export default Pagination;
