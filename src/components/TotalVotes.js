import { useSelector } from "react-redux";
import { selectCounter } from "../app/counterSlice";

const TotalVotes = () => {
  const count = useSelector(selectCounter);
  return (
    <div className="totalTally">
      <div className="voteCount">Total Votes: {count} </div>
    </div>
  );
};

export default TotalVotes;
