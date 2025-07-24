import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        setError('');
        navigate('/dashboard'); // redirección
      } else {
        setError('Credenciales incorrectas');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
          {error && <div className="error-box">{error}</div>}
        </form>
      </header>
    </div>
  );
}

export default Login;
