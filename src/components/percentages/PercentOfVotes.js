import { useSelector } from "react-redux";
import { selectCounter } from "../../app/counterSlice";

const PercentOfVotes = ({tally}) => {
  const totalVotes = useSelector(selectCounter);
  return totalVotes === 0 ? (
    <div className="percent">__%</div>
  ) : (
    <div className="percent"> {Math.floor((tally / totalVotes) * 100)}%</div>
  );
};

export default PercentOfVotes;
