import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/create" element={<CreateListing />} /> */}
    </Routes>
  );
}

export default App;
