import { CoffeeCard } from "./CoffeeCard";
import { CoffeesCard, Container, List } from "./styles";

export function CoffeeList() {
  return (
    <Container>
      <List>
        <CoffeesCard>
          <CoffeeCard />
        </CoffeesCard>
      </List>
    </Container>
  );
}
