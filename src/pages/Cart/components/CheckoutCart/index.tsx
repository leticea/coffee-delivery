import { Minus, Plus, Trash } from "phosphor-react";
import {
  OrderCard,
  SelectedCoffeeCard,
  ButtonsContainer,
  RemoveButton,
} from "./styles";
import { useContext, useState } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import ConfirmationCard from "../ConfirmationCard";
import { EmptyCart } from "../EmptyCart";
import { QuantityButton } from "../../../../components/QuantityButton";

export interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CheckoutCart({ coffee }: CoffeeCartCardProps) {
  const { cartItems, removeCoffeeFromCart, changeCartItemQuantity } = useContext(CartContext);
  //const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCoffeeFromCart(cartItems.id);
  }

  return (
    <>
      <OrderCard>
        {cartItems.length !== 0 ? (
          cartItems.map((coffee) => {
            const totalCoffees = coffee.price * coffee.quantity;
            return (
              <SelectedCoffeeCard>
                <div>
                  <img src={coffee.image} alt="" />
                  <div>
                    {coffee.name}
                    <ButtonsContainer>
                      <QuantityButton
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={coffee.quantity}
                      />

                      <RemoveButton type="button" onClick={handleRemove}>
                        <Trash size={14} />
                        Remover
                      </RemoveButton>
                    </ButtonsContainer>
                  </div>
                </div>
                <p>R$ {moneyFormat(totalCoffees)}</p>
                <hr />
              </SelectedCoffeeCard>
            );
          })
        ) : (
          <EmptyCart />
        )}
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
