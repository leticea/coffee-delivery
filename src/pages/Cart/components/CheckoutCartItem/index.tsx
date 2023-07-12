import { Trash } from "phosphor-react";
import { SelectedCoffeeCard, ButtonsContainer, RemoveButton } from "./styles";
import { useContext } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { QuantityButton } from "../../../../components/QuantityButton";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CheckoutCartItem({ coffee }: CoffeeCartCardProps) {
  const { removeCartItem, changeCartItemQuantity } = useContext(CartContext);

  const coffeesTotal = coffee.price * coffee.quantity;

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    if (coffee.quantity > 0) {
      changeCartItemQuantity(coffee.id, "decrease");
    }
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <>
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
        <p>R$ {moneyFormat(coffeesTotal)}</p>
        <hr />
      </SelectedCoffeeCard>
    </>
  );
}
