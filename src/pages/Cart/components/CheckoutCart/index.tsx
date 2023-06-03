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
import traditional from "../../../../assets/traditional.svg";

import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export interface CoffeeProps {
  id: number;
  tags: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

export function CheckoutCart({ coffee }: CoffeeCartCardProps) {
  const { cartItems, cartQuantity, cartItemsTotal } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const coffeeTotal = coffee.price * coffee.quantity;
  const DELIVERY_PRICE = 3.5;
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;


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
            Total de itens <span>R$ {moneyFormat(cartItemsTotal)}</span>
          </p>
          <p>
            Entrega <span>R$ {moneyFormat(DELIVERY_PRICE)}</span>
          </p>
          <h1>
            Total <span>R$ {moneyFormat(cartTotal)}</span>
          </h1>
        </Amount>
        <Button>Confirmar pedido</Button>
      </OrderCard>
    </>
  );
}
