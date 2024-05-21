import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
