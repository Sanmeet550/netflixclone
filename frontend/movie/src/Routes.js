import { BrowserRouter, Route, Routes } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";

function movieRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default movieRoutes;
