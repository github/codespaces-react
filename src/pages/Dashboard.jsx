import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import DataTable from "../components/Datatable";

function Dashboard({ setIsAuthenticated }) {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    let pageMod = 0;
    if (loading) return; // Evita llamadas duplicadas
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?_limit=10&_page=${page}`
      );
      pageMod = page+1;
      setAlbums((prev) => {
        const existingIds = new Set(prev.map((album) => album.id));
        const newData = response.data.filter((album) => !existingIds.has(album.id));
        
        return [...prev, ...newData]; // Ordenar por ID
      });
      
      setPage(pageMod);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    fetchData();
  }, []); // ✅ Solo se ejecuta una vez al montar el componente

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="logout" onClick={() => setIsAuthenticated(false)}>
        Cerrar sesión
      </button>
      <DataTable data={albums} />
      <button onClick={fetchData} disabled={loading} className="load-more">
        {loading ? "Cargando..." : "Ver más"}
      </button>
      {loading && <p className="loading">Cargando datos...</p>}
    </div>
  );
}

export default Dashboard;
