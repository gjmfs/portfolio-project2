import { Nav } from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { Profile } from "./components/profile/Profile";
import { Err } from "./Err";
import { Project } from "./pages/Project";

export const App = () => {
  return (
    <div className="App container">
      <Nav />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
        <div className="col">
          <Profile />
        </div>
        <div className="col">
          <Routes>
            <Route path="/portfolio-project2" element={<Home />} />
            <Route path="/portfolio-project2/*" element={<Err />} />
            <Route path="/portfolio-project2/projects" element={<Project />} />
          </Routes>
        </div>
      </div>
      <Footer name="Mufees" />
    </div>
  );
};
