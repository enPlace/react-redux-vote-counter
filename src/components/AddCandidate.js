import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCandidate } from "../app/voteSlice";

const AddCandidate = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const handleChange = (e) => {
    setNewName(e.target.value)
    console.log(e.target.value)
  };
  const handleDispatch =() =>{
      console.log(newName)
      console.log(addCandidate)
      dispatch(addCandidate({name:newName}))
      
  }

  return !showForm ? (
    <button className="showForm" onClick={() => setShowForm(true)}>
      Add a candidate
    </button>
  ) : (
    <form
      action=""
      className="newCandidate"
      onSubmit={(e) => {
        e.preventDefault();
        handleDispatch()
        setNewName("")
        setShowForm(false)

      }}
    >
      <input
        placeholder = "enter name of candidate..."
        type="text"
        className="newCandidateName"
        value={newName}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type = "button" onClick = {()=>setShowForm(false)} >Cancel</button>
      <button type="submit">Add Candidate</button>
    </form>
  );
};

export default AddCandidate;
