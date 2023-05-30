import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { OurCoffees } from "./CoffeeList/components/OurCoffees";
import { createContext, useState } from "react";
//import { CoffeeProps } from "./CoffeeList/components/CoffeeCard";

interface CoffeeProps {
  id: number;
  tags: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

interface CartContextType {
  //cartItems: CoffeeProps;
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  // addCoffeeToCart: () => void;
  // removeSelectedCoffee: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function Home() {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => {
      return state + 1;
    });
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => {
        return state - 1;
      });
    }
  }

  return (
    <>
      <CartContext.Provider value={{ quantity, handleDecrease, handleIncrease }}>
        <Introduction />
        <OurCoffees />
        <CoffeeList receiveCartValue={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </CartContext.Provider>
    </>
  );
}
