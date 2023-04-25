import { useEffect, useState } from "react";
import { coffees } from "../../../utils/coffees";
import { CoffeeCard } from "./CoffeeCard";
import { Container, List } from "./styles";

interface CoffeeOrderProps {
  id: number;
  quantity: number;
}

interface CoffeeListProps {
  receiveCartValue: () => void;
}

export function CoffeeList({ receiveCartValue }: CoffeeListProps) {
  const [newOrder, setNewOrder] = useState<CoffeeOrderProps[]>([]);

  useEffect(() => {

    if (newOrder.length !== 0) {
      avisarAPI()
    }
    console.log(newOrder)
  }, [newOrder])

  function addCoffeeToCart(item: CoffeeOrderProps) {
    const aux = [...newOrder, item];

    setNewOrder(aux);
    receiveCartValue();
  }

  function avisarAPI() {
    console.log('Pedido feito!');
  }

  return (
    <Container>
      <List>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              addCoffeeToCart={addCoffeeToCart}
            />
          );
        })}
      </List>
    </Container>
  );
}
