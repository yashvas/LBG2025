import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/home/HomePage";
import * as routes from "./routes/manifest";
import Footer from "./components/footer/Footer";
import SustainabilityPage from "./routes/sustainability/SustainabilityPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<HomePage />} />
        <Route path={routes.Sustainability} element={<SustainabilityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
