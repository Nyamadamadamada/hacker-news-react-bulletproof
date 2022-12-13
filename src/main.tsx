import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout/Layout";
import "./index.css";
import En from "./features/news/routes/En";
import Ja from "./features/news/routes/Ja";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<En />} />
        <Route path="/ja" element={<Ja />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
