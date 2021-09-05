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
} from "../app/voteSlice";
import {
  increment,
  decrement,
  reset,
  selectCounter,
} from "../app/counterSlice";

const Ballot = () => {
  const dispatch = useDispatch();
  const votes = useSelector(selectVotes);
  const totalVotes = useSelector(selectCounter);

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
          </div>
        );
      })}
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
  );
};

export default Ballot;
