import { useState } from "react";
import { coffees } from "../../../utils/coffees";
import { CoffeeCard } from "./components/CoffeeCard";
import { Container, List } from "./styles";

export function CoffeeList() {
  return (
    <Container>
      <List>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </List>
    </Container>
  );
}
