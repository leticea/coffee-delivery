import { useState } from "react";
import { coffees } from "../../../utils/coffees";
import { CoffeeCard } from "./components/CoffeeCard";
import { Container, List } from "./styles";

interface CoffeeOrderProps {
  id: number;
  quantity: number;
}

interface CoffeeListProps {
  receiveCartValue: () => void;
}

export function CoffeeList({ receiveCartValue }: CoffeeListProps) {
  //const [newOrder, setNewOrder] = useState<CoffeeOrderProps[]>([]);

  // function addCoffeeToCart(item: CoffeeOrderProps) {
  //   const aux = [...newOrder, item];
  //   setNewOrder(aux);
  //   receiveCartValue();
  // }

  return (
    <Container>
      <List>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              // addCoffeeToCart={addCoffeeToCart}
            />
          );
        })}
      </List>
    </Container>
  );
}
