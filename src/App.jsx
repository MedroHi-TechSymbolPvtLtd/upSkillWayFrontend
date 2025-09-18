import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </div>
  );
}

export default App;
