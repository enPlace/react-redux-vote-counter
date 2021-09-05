import React from 'react';
import './App.css';
import TotalVotes from './features/totalCount/TotalVotes';
import Ballot from './features/voteTally/Ballot';

function App() {
  return (
    <div className="App">
     <TotalVotes></TotalVotes>
     <Ballot></Ballot>
    </div>
  );
}

export default App;
