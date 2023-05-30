import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { OurCoffees } from "./CoffeeList/components/OurCoffees";
import { createContext } from "react";
import { CoffeeProps } from "./CoffeeList/components/CoffeeCard";

interface CartContextType {
  cartItems: CoffeeProps;
  quantity: number;
  addCoffeeToCart: () => void;
  removeSelectedCoffee: () => void;
}

const CartContext = createContext({} as CartContextType);

export function Home() {
  return (
    <>
      <CartContext.Provider value={{}}>
        <Introduction />
        <OurCoffees />
        <CoffeeList receiveCartValue={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </CartContext.Provider>
    </>
  );
}
