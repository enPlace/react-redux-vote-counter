import { useSelector, useDispatch } from "react-redux";
import AddCandidate from "./AddCandidate";
import "./Ballot.css";
import BarPercent from "./percentages/BarPercent";
import PercentOfVotes from "./percentages/PercentOfVotes";
import {
  voted,
  voteRedacted,
  selectVotes,
  resetAllCandidates,
  candidateRemoved,
} from "../app/voteSlice";
import {
  increment,
  decrement,
  reset,
  decrementByAmount,
} from "../app/counterSlice";

const Ballot = () => {
  const dispatch = useDispatch();
  const votes = useSelector(selectVotes);

  return (
    <div className="Ballot">
      {votes.map((vote) => {
        return (
          <div key={vote.id} className="candidateInfo">
            <div className="buttons">
              <button
                className="addVote"
                onClick={() => {
                  dispatch(voted({ id: vote.id }));
                  dispatch(increment());
                }}
              >
                +
              </button>
              <button
                className="redactVote"
                onClick={() => {
                  if (vote.count > 0) {
                    dispatch(voteRedacted({ id: vote.id }));
                    dispatch(decrement());
                  }
                }}
              >
                -
              </button>
            </div>
            <div className="candidate">
              <div className="primaryInfo">
                <div className="candidateName"> {vote.name} </div>
                <div className="candidatePercent">
                  <PercentOfVotes tally={vote.count}></PercentOfVotes>
                </div>
              </div>
              <div className="tallyInfo">
                <div className="candidateCount">Vote count: {vote.count}</div>
              </div>
            </div>
            <div
              className="barDisplay"
              style={{
                width: "200px",
                height: "30px",
                border: "1px solid black",
              }}
            >
              <BarPercent tally={vote.count}></BarPercent>
            </div>
            <button
              className="deleteButton"
              onClick={() => {
                dispatch(decrementByAmount({ count: vote.count }));
                dispatch(candidateRemoved({ id: vote.id }));
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <div className="bottomButtons">
        <AddCandidate></AddCandidate>
        <button
          className="resetAll"
          onClick={() => {
            dispatch(reset());
            dispatch(resetAllCandidates());
          }}
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default Ballot;
