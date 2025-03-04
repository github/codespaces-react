import { useState } from "react";
import Swal from 'sweetalert2';

function LoginForm({ setIsAuthenticated }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
        if (user === "admin" && password === "1234") {
            setIsAuthenticated(true);
            Swal.fire({
                    title: "Bienvenido",
                    text: "Has iniciado sesión correctamente.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                  });
          } else {
            Swal.fire({
                    title: "Credenciales incorrectas",
                    icon: "error",
                    confirmButtonColor: "#d33",
                  });
            setError("Credenciales incorrectas.");
          }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-image">
        <img src="https://laderasur.com/wp-content/uploads/2024/09/aguila-harpia-sidnei-dantas-inaturalist-3.jpeg" alt="Infinito" />
      </div>
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Cargando..." : "Ingresar"}
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
