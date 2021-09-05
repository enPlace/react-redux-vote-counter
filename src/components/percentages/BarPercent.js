import { useSelector } from "react-redux";
import { selectCounter } from "../../app/counterSlice";

const BarPercent = ({ tally }) => {
  const totalVotes = useSelector(selectCounter);
  const barPercent = Math.floor((tally / totalVotes) * 100) * 2;
  return totalVotes === 0 ? null : (
    <div
      className="bar"
      style={{
        width: barPercent,
        height: "100%",
        "background-color": "yellow",
      }}
    ></div>
  );
};

export default BarPercent;
