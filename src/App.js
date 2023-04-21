import Index from "./pages/Index";
import Computer from "./pages/Computer";
import Registration from "./pages/Registration";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
