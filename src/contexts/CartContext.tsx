import { ReactNode, createContext, useState } from "react";
import { CoffeeProps } from "../pages/Home/CoffeeList/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends CoffeeProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  // handleIncrease: () => void;
  // handleDecrease: () => void;
  // removeSelectedCoffee: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>();

  const cartQuantity = cartItems?.length;
  const cartItemsTotal = cartItems?.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems?.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  // function removeSelectedCoffee(id: number) {
  //   coffees.filter((coffee) => {
  //     return coffee.id !== id;
  //   });

  //   console.log("clicou");
  //   //setCoffeeOrders(undeletedCoffees);
  // }

  return (
    <CartContext.Provider value={{ addCoffeeToCart, cartItems, cartQuantity, cartItemsTotal }}>
      {children}
    </CartContext.Provider>
  );
}
