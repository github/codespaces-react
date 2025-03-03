import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/Datatable";

function Dashboard({ setIsAuthenticated }) {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?_limit=10&_page=${page}`
      );
      setAlbums((prev) => [...prev, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => setIsAuthenticated(false)}>Cerrar sesión</button>
      <DataTable data={albums} />
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Cargando..." : "Ver más"}
      </button>
    </div>
  );
}

export default Dashboard;
