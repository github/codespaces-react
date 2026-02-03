import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResults([]);
    try {
      const response = await fetch(
        `https://fr.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`,
      );
      const data = await response.json();
      setResults(data.query?.search || []);
    } catch (err) {
      setError("Erreur lors de la recherche Wikipedia.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recherche Wikipedia</h1>
        <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher sur Wikipedia..."
            style={{ padding: 8, width: 250 }}
          />
          <button type="submit" style={{ marginLeft: 8, padding: 8 }}>
            Chercher
          </button>
        </form>
        {loading && <p>Recherche en cours...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul style={{ textAlign: "left", maxWidth: 600, margin: "0 auto" }}>
          {results.map((item) => (
            <li key={item.pageid} style={{ marginBottom: 12 }}>
              <a
                href={`https://fr.wikipedia.org/?curid=${item.pageid}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#61dafb", fontWeight: "bold" }}
              >
                {item.title}
              </a>
              <div dangerouslySetInnerHTML={{ __html: item.snippet + "..." }} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
