import { Minus, Plus, Trash } from "phosphor-react";
import {
  OrderCard,
  SelectedCoffeeCard,
  ButtonsContainer,
  QuantityButtons,
  RemoveButton,
  Amount,
  Button,
} from "./styles";
import { useContext, useState } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";

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
        {/* <SelectedCoffeeCard>
          <div>
            <img src={traditional} alt="" />
            <div>
              Expresso Tradicional
              <ButtonsContainer>
                <QuantityButtons>
                  <Minus size={14} />
                  1
                  <Plus size={14} />
                </QuantityButtons>

                <RemoveButton>
                  <Trash size={14} />
                  Remover
                </RemoveButton>
              </ButtonsContainer>
            </div>
          </div>
          <p>R$ 9,90</p>
        </SelectedCoffeeCard> */}
        <hr />

        <Amount>
          <p>
            Total de itens <span>R$ {moneyFormat(totalCartItems)}</span>
          </p>
          <p>
            Entrega <span>R$ {moneyFormat(DELIVERY_PRICE)}</span>
          </p>
          <h1>
            Total <span>R$ {moneyFormat(cartTotal)}</span>
          </h1>
        </Amount>
        <Button type="submit" disabled={cartQuantity <= 0}>
          Confirmar pedido
        </Button>
      </OrderCard>
    </>
  );
}
