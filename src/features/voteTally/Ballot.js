import { useSelector, useDispatch } from "react-redux";
import { voted, voteRedacted, selectVotes } from "./voteSlice";
import {
  increment,
  decrement,
  reset,
  selectCounter,
} from "../totalCount/counterSlice";

const Ballot = () => {
  const dispatch = useDispatch();
  const votes = useSelector(selectVotes);
  return (
    <div className="ballot">
      {votes.map((vote) => {
        return (
          <div key={vote.id} className="candidate">
            <div className="candidateCount">{vote.count}</div>
            <div className="candidateName"> {vote.name} </div>
            <button
              className="redactVote"
              onClick={() => {
                dispatch(voteRedacted({ id: vote.id }));
                dispatch(decrement());
              }}
            >
              -
            </button>
            <button
              className="addVote"
              onClick={() => {
                dispatch(voted({ id: vote.id }));
                dispatch(increment())
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ballot;
