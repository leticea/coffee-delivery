import { CoffeeCard, Container, List } from "./styles";

interface CoffeeProps {
  id: number;
  tags: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeList({ coffee }: CoffeeCardProps) {
  return (
    <Container>
      <List>
        <CoffeeCard key={coffee.id}>
        </CoffeeCard>
      </List>
    </Container>
  );
}
