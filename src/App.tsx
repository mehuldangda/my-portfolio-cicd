import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

<Route path="/" element={<Home />} />
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
