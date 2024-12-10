import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
