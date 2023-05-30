import {
  Title,
} from "./styles";

import { useState } from "react";
import { coffees } from "../../utils/coffees";
import { CoffeeProps } from "../Home/CoffeeList/components/CoffeeCard";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { CheckoutCart } from "./components/CheckoutCart";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function Cart({ coffee }: CoffeeCardProps) {
  //const [cartItems, setCartItems] = useState<CoffeeProps[]>(coffees);
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

  function removeSelectedCoffee(id: number) {
    coffees.filter((coffee) => {
      return coffee.id !== id;
    });

    console.log("clicou");
    //setCoffeeOrders(undeletedCoffees);
  }

  // function handleCreateNewOrder(coffees: CoffeeCardProps) {
  //   const newOrder: CoffeeCardProps = {
  //     id: coffees.id,
  //     name: coffees.name,
  //     price: coffees.price,
  //     image: coffees.image
  //   };

  //   setCartItems(state => [...state, newOrder]);
  // }

  return (
    <>
      <Title>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </Title>
      <CheckoutForm />
      <Payment />
      <CheckoutCart />
    </>
  );
}
