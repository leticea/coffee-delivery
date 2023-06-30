import { OrderCard } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { EmptyCart } from "../EmptyCart";
import ConfirmationCard from "../ConfirmationCard";
import { CheckoutCartItem } from "../CheckoutCartItem";

export function CheckoutCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <OrderCard>
        {cartItems.length !== 0 ? (
          cartItems.map((coffee) => (
            <CheckoutCartItem key={coffee.id} coffee={coffee} />
          ))
        ) : (
          <EmptyCart />
        )}
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
