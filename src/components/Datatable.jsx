function DataTable({ data = [] }) { // Asegura que data sea un array por defecto
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((album) => (
                <tr key={`${Math.random()}-${album.id}`}>
                  <td>{album.id}</td>
                  <td>{album.title}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DataTable;
  