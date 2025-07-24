import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css';

function Dashboard() {

  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      const nextItems = data.slice((page - 1) * 10, page * 10);
      setAlbums((prev) => [...prev, ...nextItems]);
    } catch (error) {
      console.error('Error al cargar álbumes:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAlbums();
  }, [page]);

  const handleLogout = () => {
    navigate('/');
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Lista de Álbumes</h2>

        {loading && <p>Cargando datos...</p>}

        <table className="albums-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Usuario ID</th>
                </tr>
            </thead>
            <tbody>
                {albums.map((album) => (
                <tr key={album.id}>
                    <td>{album.id}</td>
                    <td>{album.title}</td>
                    <td>{album.userId}</td>
                </tr>
                ))}
            </tbody>
            </table>

        <button onClick={handleLoadMore} className="view-more-button">
          Ver más
        </button>

        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </header>
    </div>
  );
}

export default Dashboard;
