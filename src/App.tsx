import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/home/HomePage";
import * as routes from "./routes/manifest";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
