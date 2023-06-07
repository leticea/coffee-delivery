import { CheckoutCart, CoffeeCartCardProps } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { Title } from "./styles";

export function Cart() {
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
