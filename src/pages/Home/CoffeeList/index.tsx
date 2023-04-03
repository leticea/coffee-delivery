import { CoffeeCard, Container, List, OurCoffees } from "./styles";

interface CoffeeProps {
  id: number;
  tags: string[];
  name: string;
  description: string;
  image: string[];
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeList({ coffee }: CoffeeCardProps) {
  return (
    <Container>
      <OurCoffees>Nossos cafés</OurCoffees>
      <List>
        <CoffeeCard key={coffee.id}>
          <img src={coffee.image} alt="" />
          <h1>{coffee.name}</h1>
        </CoffeeCard>
      </List>
    </Container>
  );
}
