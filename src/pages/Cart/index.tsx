import {
  Title,
} from "./styles";

import { CoffeeProps } from "../Home/CoffeeList/components/CoffeeCard";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { CheckoutCart } from "./components/CheckoutCart";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function Cart({ coffee }: CoffeeCardProps) {
  return (
    <>
      <Title>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </Title>
      <CheckoutForm />
      <Payment />
      <CheckoutCart coffee={coffee} />
    </>
  );
}
