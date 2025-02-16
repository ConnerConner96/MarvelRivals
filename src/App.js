import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  // Fetch character data from your NoCodeAPI or local JSON file
  useEffect(() => {
    fetch('https://v1.nocodeapi.com/connerconner96/google_sheets/qDKnLnnXkMrpGDHI?tabId=Rivals')
      .then((response) => response.json())
      .then((data) => setCharacters(data));  // Set characters in state
  }, []);

  return (
    <div className="App">
      <h1>Marvel Rivals</h1>
      <CharacterList characters={characters} /> {/* Pass the fetched characters data */}
    </div>
  );
}

export default App;
