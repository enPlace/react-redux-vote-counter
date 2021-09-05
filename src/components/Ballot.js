import { useSelector, useDispatch } from "react-redux";
import AddCandidate from "./AddCandidate";
import "./Ballot.css";
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

  const percentOfVotes = (tally) => {
    return totalVotes === 0 ? (
      <div className="percent">__%</div>
    ) : (
      <div className="percent"> {Math.floor((tally / totalVotes) * 100)}%</div>
    );
  };

  const bar = (tally) => {
    const barPercent = Math.floor((tally/totalVotes) *100 )*2
    return totalVotes === 0 ? null : ( 
      <div className="bar" style ={{
        "width": barPercent,
        "height": "100%",
        "background-color":"yellow"
      }}></div>
     );
  }
   


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
                  dispatch(voteRedacted({ id: vote.id }));
                  dispatch(decrement());
                }}
              >
                -
              </button>
            </div>
            <div className="candidate">
              <div className="primaryInfo">
                <div className="candidateName"> {vote.name} </div>
                <div className="candidatePercent">
                  {percentOfVotes(vote.count)}
                </div>
              </div>
              <div className="tallyInfo">
                <div className="candidateCount">Vote count: {vote.count}</div>
              </div>
            </div>
            <div className="barDisplay"style= {{
              "width": "200px",
              "height": "30px",
              "border": "1px solid black",

            }}>
              {bar(vote.count)}
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
