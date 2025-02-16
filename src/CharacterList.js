import React, { useEffect, useState } from "react";
import styles from "./styles";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = "https://v1.nocodeapi.com/connerconner96/google_sheets/qDKnLnnXkMrpGDHI?tabId=Rivals";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  // Filter characters by search query
  const filteredCharacters = characters.filter((character) =>
    character.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Marvel Rivals Characters</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Characters..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      {/* Character Grid */}
      <div style={styles.grid}>
        {filteredCharacters.map((character) => (
          <button
            key={character.ID}
            onClick={() => setSelectedCharacter(character)}
            style={styles.characterCard}
          >
            <img src={character.ImageURL} alt={character.Name} style={styles.characterImage} />
            <p style={styles.characterName}>{character.Name}</p>
          </button>
        ))}
      </div>

      {/* Character Details Modal */}
      {selectedCharacter && (
        <div style={styles.characterDetails}>
          <h2 style={styles.characterTitle}>{selectedCharacter.Name}</h2>
          <img src={selectedCharacter.ImageURL} alt={selectedCharacter.Name} style={styles.characterBigImage} />
          <p><strong>Role:</strong> {selectedCharacter.Role}</p>
          <p><strong>Synergies:</strong> {selectedCharacter.Synergies}</p>
          <p><strong>Ultimate:</strong> {selectedCharacter.Ultimate || "N/A"}</p>
          <p><strong>Base Health:</strong> {selectedCharacter.BaseHealth || "0"}</p>
          <p><strong>Lore:</strong> {selectedCharacter.Lore || "No lore available"}</p>
          <p><strong>Difficulty:</strong> {selectedCharacter.Difficulty || "Unknown"}</p>
          <button onClick={() => setSelectedCharacter(null)} style={styles.closeButton}>Close</button>
        </div>
      )}
    </div>
  );
};

// 🎨 Styling

export default CharacterList;
