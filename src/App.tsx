import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/home/HomePage";
import * as routes from "./routes/manifest";
import Footer from "./components/footer/Footer";
import SustainabilityPage from "./routes/sustainability/SustainabilityPage";
import styled from "styled-components";
import CareersPage from "./routes/careers/CareersPage";
import SavingsPage from "./routes/savings/SavingsPage";
import AboutUsPage from "./routes/About us/AboutUsPage";
import { useState, useEffect } from "react";
import ProgressBar from "./components/progressBar/ProgressBar";


const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


const App: React.FC = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={routes.Home} element={<HomePage />} />
          <Route path={routes.Sustainability} element={<SustainabilityPage />} />
          <Route path={routes.Careers} element={<CareersPage />} />
          <Route path={routes.Savings} element={<SavingsPage />} />
          <Route path={routes.AboutUs} element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppLayout>
  );
};
export default App;
