import ReactDOM from "react-dom/client";
import movieRoutes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(movieRoutes());
