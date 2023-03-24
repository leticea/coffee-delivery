import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Success } from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />

    </Routes>
  )
}
