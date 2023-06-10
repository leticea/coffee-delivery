import { ReactNode, createContext, useEffect, useState } from "react";
import { produce } from "immer";
import { CoffeeProps } from "../pages/Home/CoffeeList/components/CoffeeCard";

export interface CartItem extends CoffeeProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  totalCartItems: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(
      "@coffee-delivery:cart-items-1.0.0"
    );

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });

  const cartQuantity = cartItems.length;
  const totalCartItems = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newOrder = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newOrder);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newOrder = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newOrder);
  }

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        cartItems,
        cartQuantity,
        totalCartItems,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
