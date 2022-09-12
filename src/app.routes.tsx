import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./page/Author";
import Home from "./page/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author/:author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
