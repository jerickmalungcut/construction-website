import { STATS_DATA } from "../utils/data";
import CardStats from "./Cards/CardStats";

const Stats = () => {
  return (
    <section className="gradient">
      <div className="max-w-screen-xl flex justify-around flex-wrap mx-auto">
        {STATS_DATA.map((item, index) => (
          <CardStats
            key={index}
            iconUrl={item.iconUrl}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
