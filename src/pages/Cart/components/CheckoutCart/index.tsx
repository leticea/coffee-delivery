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
import { coffees } from "../../../../utils/coffees";
import traditional from "../../../../assets/traditional.svg";

import { CoffeeProps } from "../../../Home/CoffeeList/components/CoffeeCard";
import { CartContext } from "../../../../contexts/CartContext";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CheckoutCart({ coffee }: CoffeeCardProps) {
  const { cartItems, cartQuantity } = useContext(CartContext);
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

  return (
    <>
      <OrderCard>
        <SelectedCoffeeCard>
          <div>
            <img src={traditional} alt="" />
            <div>
              Expresso Tradicional
              <ButtonsContainer>
                <QuantityButtons>
                  <Minus size={14} onClick={handleDecrease} />
                  {quantity}
                  <Plus size={14} onClick={handleIncrease} />
                </QuantityButtons>

                <RemoveButton>
                  <Trash size={14} />
                  Remover
                </RemoveButton>
              </ButtonsContainer>
            </div>
          </div>
          <p>R$ 9,90</p>
        </SelectedCoffeeCard>
        <hr />
        <SelectedCoffeeCard>
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
        </SelectedCoffeeCard>
        <hr />

        <Amount>
          <p>
            Total de itens <span>R$ 29,70</span>
          </p>
          <p>
            Entrega <span>R$ 3,50</span>
          </p>
          <h1>
            Total <span>R$ 33,20</span>
          </h1>
        </Amount>
        <Button>Confirmar pedido</Button>
      </OrderCard>
    </>
  );
}
