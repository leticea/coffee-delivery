import {
  Amount,
  Button,
  ButtonsContainer,
  OrderCard,
  PaymentInfo,
  PaymentMethods,
  QuantityButtons,
  RemoveButton,
  SelectedCoffeeCard,
  Title,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import { useState } from "react";
import traditional from "../../assets/traditional.svg";
import { coffees } from "../../utils/coffees";
import { CoffeeProps } from "../Home/CoffeeList/components/CoffeeCard";
import { OrderForm } from "./components/OrderForm";
import { Payment } from "./components/Payment";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function Cart({ coffee }: CoffeeCardProps) {
  //const [cartItems, setCartItems] = useState<CoffeeProps[]>(coffees);
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

  function removeSelectedCoffee(id: number) {
    coffees.filter((coffee) => {
      return coffee.id !== id;
    });

    console.log("clicou");
    //setCoffeeOrders(undeletedCoffees);
  }

  // function handleCreateNewOrder(coffees: CoffeeCardProps) {
  //   const newOrder: CoffeeCardProps = {
  //     id: coffees.id,
  //     name: coffees.name,
  //     price: coffees.price,
  //     image: coffees.image
  //   };

  //   setCartItems(state => [...state, newOrder]);
  // }

  return (
    <>
      <Title>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </Title>
      <OrderForm />
      <Payment />

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

                <RemoveButton onClick={removeSelectedCoffee}>
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
