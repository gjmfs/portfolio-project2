import "./App.css";

import { Nav } from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/profile/Profile";
import { Err } from "./Err";
import { Project } from "./pages/ProjectPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { DevTools } from "./pages/DevTools";
import { Contact } from "./components/Contact/Contact";

export const App = () => {
  return (
    <div className="App container">
      <Nav />
      <div className="row cols-1 cols-md-2 cols-lg-2">
        <div className="col-12  col-md-5">
          <div className="container sticky-sm-top">
            <Profile />
          </div>
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Err />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/devtools" element={<DevTools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer name="Mufees" />
    </div>
  );
};
