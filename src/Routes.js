import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import IV from "./pages/IV.js";
import Testpaper from "./pages/Testpaper.js";
import ClassReport from "./pages/ClassReport.js";
import AdditonalContent from "./pages/AdditionalContent.js";
import Paper1 from "./pages/papers/Paper1.js";
import Paper2 from "./pages/papers/Paper2.js";
import Paper3 from "./pages/papers/Paper3.js";
import LandingLayout from "./LandingLayout";
import LoggedOut from "./components/LoggedOut";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedOut />} />
          <Route path="/" element={<LandingLayout />}>
            <Route exact path="/home" element={<Home />} />
            <Route path="/iv" element={<IV />} />
            <Route exact path="/testpaper" element={<Testpaper />}>
              <Route path="paper1" element={<Paper1 />} />
              <Route path="paper2" element={<Paper2 />} />
              <Route path="paper3" element={<Paper3 />} />
            </Route>
            <Route path="/classreport" element={<ClassReport />} />
            <Route path="/additionalcontent" element={<AdditonalContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
