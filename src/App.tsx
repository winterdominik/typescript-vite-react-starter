import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
