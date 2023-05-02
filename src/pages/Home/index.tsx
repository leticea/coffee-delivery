import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { OurCoffees } from "./CoffeeList/OurCoffees";
import { createContext } from "react";
import { CoffeeProps } from "./CoffeeList/CoffeeCard";

interface CartContextType {
  cartItems: CoffeeProps;
}

const CartContext = createContext({} as CartContextType);

export function Home() {
  return (
    <>
      <Introduction />
      <CartContext.Provider value={{ cartItems }}>
        <OurCoffees />
        <CoffeeList />
      </CartContext.Provider>
    </>
  );
}
