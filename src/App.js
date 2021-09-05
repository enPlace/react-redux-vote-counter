import React from 'react';
import './App.css';
import TotalVotes from './components/TotalVotes';
import Ballot from './components/Ballot';

function App() {
  return (
    <div className="App">
     <TotalVotes></TotalVotes>
     <Ballot></Ballot>
    </div>
  );
}

export default App;
