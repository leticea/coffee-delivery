import { Minus, Plus, Trash } from "phosphor-react";
import {
  OrderCard,
  SelectedCoffeeCard,
  ButtonsContainer,
  QuantityButtons,
  RemoveButton,
} from "./styles";
import { useContext, useState } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import ConfirmationCard from "../ConfirmationCard";

export interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CheckoutCart() {
  const { cartItems, removeCoffeeFromCart } = useContext(CartContext);
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

  function handleRemove() {
    removeCoffeeFromCart(coffee.id);
  }

  return (
    <>
      <OrderCard>
        {cartItems.map((coffee) => {
          const totalCoffees = coffee.price * coffee.quantity;
          return (
            <SelectedCoffeeCard>
              <div>
                <img src={coffee.image} alt="" />
                <div>
                  {coffee.name}
                  <ButtonsContainer>
                    <QuantityButtons>
                      <Minus size={14} onClick={handleDecrease} />
                      {coffee.quantity}
                      <Plus size={14} onClick={handleIncrease} />
                    </QuantityButtons>

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
        })}
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
