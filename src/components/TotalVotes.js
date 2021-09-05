import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCounter } from "../app/counterSlice";

const TotalVotes = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch()
  return (
    <div className="totalTally">

      <div className="voteCount">Total Votes:  {count} </div>
     
    </div>
  );
};

export default TotalVotes;
