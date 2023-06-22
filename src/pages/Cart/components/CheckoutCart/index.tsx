import { Trash } from "phosphor-react";
import {
  OrderCard,
  SelectedCoffeeCard,
  ButtonsContainer,
  RemoveButton,
} from "./styles";
import { useContext } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { EmptyCart } from "../EmptyCart";
import { QuantityButton } from "../../../../components/QuantityButton";
import ConfirmationCard from "../ConfirmationCard";
import { CheckoutCartItem } from "../CheckoutCartItem";

export function CheckoutCart() {
  const { cartItems } = useContext(CartContext);

  //onsole.log(cartItems);

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
