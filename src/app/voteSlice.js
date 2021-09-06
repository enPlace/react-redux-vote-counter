import { createSlice } from "@reduxjs/toolkit";

const voteSlice = createSlice({
  name: "votes",
  initialState: {
    a: { name: "Candidate A", count: 0, id: "a" },
    b: { name: "Candidate B", count: 0, id: "b" },
    c: { name: "Candidate C", count: 0, id: "c" },
    d: { name: "Candidate D", count: 0, id: "d" },
    allIds: ["a", "b", "c", "d"],
  },
  reducers: {
    voted: (state, action) => {
      state[action.payload.id].count++;
    },
    voteRedacted: (state, action) => {
      if (state[action.payload.id].count > 0) state[action.payload.id].count--;
    },
    resetAllCandidates: (state) => {
      state.allIds.map((id) => (state[id].count = 0));
    },
    addCandidate: (state, action) => {
      state[action.payload.name] = {
        name: action.payload.name,
        count: 0,
        id: action.payload.name,
      };
      state.allIds.push(action.payload.name);
    },
    candidateRemoved: (state, action) => {
      const newState = {
        ...state,
        allIds: state.allIds.filter((id) => id !== action.payload.id),
      };
      delete newState[action.payload.id];
      return newState;
    },
  },
});

export const selectVotes = (state) => {
  return state.votes.allIds.map((id) => state.votes[id]);
};

export const {
  voted,
  voteRedacted,
  resetAllCandidates,
  addCandidate,
  candidateRemoved,
} = voteSlice.actions;
export default voteSlice.reducer;
