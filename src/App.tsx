import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { waitForBackend } from "./api/health";

function App() {
  const [isBackendReady, setIsBackendReady] = useState(false);

  useEffect(() => {
    waitForBackend().then(() => {
      setIsBackendReady(true);
    });
  }, []);

  if (!isBackendReady) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "sans-serif",
        }}
      >
        <h2>🚀 Starting AI SQL Chatbot</h2>

        <p>The backend is waking up...</p>

        <p>Please wait 30–60 seconds.</p>
      </div>
    );
  }

  return <AppRoutes />;
}

export default App;