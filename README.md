Proyecto ReactJS con Autenticación y DataTable

Este es un proyecto desarrollado en ReactJS que incluye un sistema de autenticación simple, consumo de API con paginación y una tabla de datos interactiva.

📌 Características

Inicio de sesión con validación y alertas visuales con SweetAlert2.

Persistencia de sesión en localStorage.

Consumo de API con axios, manejando la paginación de datos.

Tabla de datos con paginación y ordenamiento.

Indicador de carga (spinner) para mejorar la experiencia de usuario.

Diseño responsivo con estilos mejorados.

🚀 Instalación y Configuración

Clona el repositorio:

git clone https://github.com/tuusuario/react-dashboard.git
cd react-dashboard

Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

npm start

🛠️ Tecnologías Utilizadas

ReactJS (useState, useEffect, useCallback)

Axios (Consumo de API)

SweetAlert2 (Alertas visuales)

Bootstrap (Diseño y estilos)

📂 Estructura del Proyecto

📁 src/
 ├── 📁 components/
 │   ├── LoginForm.jsx   # Formulario de inicio de sesión
 │   ├── DataTable.jsx   # Tabla de datos con paginación
 ├── 📁 pages/
 │   ├── Dashboard.jsx   # Página principal tras el login
 ├── App.js             # Controla la autenticación y el layout
 ├── index.js           # Punto de entrada de la aplicación

🔑 Credenciales de Prueba

Para iniciar sesión, usa:

Usuario: admin

Contraseña: 1234

📌 Mejoras Futuras

Implementar autenticación con JWT.

Mejorar la interfaz con Material-UI o TailwindCSS.

Añadir más funcionalidades al Dashboard.

📄 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de modificarlo y usarlo! 🚀

Julian Ortega.
