import { createContext } from "react";

interface CoffeeProps {
  id: number;
  tags: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

interface CartContextType {
  cartItems: CoffeeProps;
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  // addCoffeeToCart: () => void;
  // removeSelectedCoffee: () => void;
}

export const CartContext = createContext({} as CartContextType);
