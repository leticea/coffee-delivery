import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import { Success } from "./pages/Success/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />

    </Routes>
  )
}
