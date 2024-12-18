import { Nav } from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Footer } from "./components/Footer/Footer";
export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer name="Mufees" />
    </div>
  );
};
