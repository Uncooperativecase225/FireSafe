import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
  );
}

export default App;