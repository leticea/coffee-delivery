import { ReactNode, createContext } from "react";

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
  cartQuantity: number;
  addCoffeeToCart: (coffee: CoffeeProps) => void;
  // handleIncrease: () => void;
  // handleDecrease: () => void;
  // removeSelectedCoffee: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  function addCoffeeToCart(coffee: CoffeeProps) {
    //const item = { id: id, quantity: quantity };
  }

  // function removeSelectedCoffee(id: number) {
  //   coffees.filter((coffee) => {
  //     return coffee.id !== id;
  //   });

  //   console.log("clicou");
  //   //setCoffeeOrders(undeletedCoffees);
  // }

  return (
    <CartContext.Provider value={{ addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
