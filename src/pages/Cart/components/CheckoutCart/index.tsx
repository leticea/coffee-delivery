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

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CheckoutCart({ coffee }: CoffeeCartCardProps) {
  const { cartQuantity, totalCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const DELIVERY_PRICE = 5;
  const coffeeTotal = coffee.price * coffee.quantity;
  const cartTotal = DELIVERY_PRICE + totalCartItems;

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

  return (
    <>
      <OrderCard>
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

                <RemoveButton>
                  <Trash size={14} />
                  Remover
                </RemoveButton>
              </ButtonsContainer>
            </div>
          </div>
          <p>R$ {moneyFormat(coffeeTotal)}</p>
        </SelectedCoffeeCard>
        <hr />
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
