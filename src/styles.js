const styles = {
    page: {
      fontFamily: "'Anton', sans-serif",
      background: "url('https://cdn.marvel.com/content/1x/marvelrivals_lob_mas_dsk_01.jpg') no-repeat center center fixed",
      backgroundSize: "cover",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
      minHeight: "100vh",
      overflow: "auto",  // Allow scrolling
    },
    title: {
      fontSize: "3rem",
      textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
      marginBottom: "20px",
    },
    searchBar: {
      padding: "10px",
      marginBottom: "20px",
      width: "300px",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "2px solid #ffcc00",
      outline: "none",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)", // Limit to 5 cards per row
      gap: "15px",
      justifyContent: "center",
      marginBottom: "20px", // Space from search bar
    },
    characterCard: {
      background: "rgba(0, 0, 0, 0.8)",
      borderRadius: "10px",
      padding: "20px",
      cursor: "pointer",
      transition: "transform 0.2s",
      maxWidth: "250px", // Control the width of the cards
    },
    characterImage: {
      width: "150px", // Bigger image size
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    characterName: {
      fontSize: "1.2rem",
      marginTop: "10px",
      color: "#ffcc00",
    },
    characterDetails: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(0, 0, 0, 0.9)",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      textAlign: "center",
    },
    characterTitle: {
      color: "#ffcc00",
    },
    characterBigImage: {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      marginBottom: "10px",
    },
    closeButton: {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      fontSize: "1rem",
      cursor: "pointer",
      borderRadius: "5px",
      marginTop: "10px",
    },
  };
  
  export default styles;
  