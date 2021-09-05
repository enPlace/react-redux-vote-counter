import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCounter } from "./counterSlice";

const TotalVotes = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch()
  return (
    <div className="totalTally">
      <button className="subtract" onClick={() => dispatch(decrement())}>
        -
      </button>
      <div className="voteCount"> {count} </div>
      <button className="add" onClick = {()=> dispatch(increment())} >+</button>
      <button className="reset" onClick = {()=> dispatch(reset())}  >Reset</button>
    </div>
  );
};

export default TotalVotes;
