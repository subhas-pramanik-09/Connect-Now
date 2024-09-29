let IS_PROD = true;
const server = IS_PROD
  ? "https://connect-now-backend.onrender.com"
  : "http://localhost:8000";

export default server;
