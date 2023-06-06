import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutCart } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { Title } from "./styles";
import ConfirmationCard from "./components/ConfirmationCard";

export function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Title>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </Title>
      <CheckoutForm />
      <Payment />
      <ConfirmationCard />
    </>
  );
}
