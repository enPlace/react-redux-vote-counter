import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "candidates",
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

export const selectCandidates = (state) => {
  return state.candidates.allIds.map((id) => state.candidates[id]);
};

export const {
  voted,
  voteRedacted,
  resetAllCandidates,
  addCandidate,
  candidateRemoved,
} = candidateSlice.actions;
export default candidateSlice.reducer;
