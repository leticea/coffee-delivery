import traditional from "../../../assets/traditional.svg";
import american from "../../../assets/american.svg";
import creamy from "../../../assets/creamy.svg";
import iced from "../../../assets/iced.svg";

import coffeeWithMilk from "../../../assets/coffee-with-milk.svg";
import latte from "../../../assets/latte.svg";
import cappuccino from "../../../assets/cappuccino.svg";
import macchiato from "../../../assets/macchiato.svg";

import mocaccino from "../../../assets/mocaccino.svg";
import hotChocolate from "../../../assets/hot-chocolate.svg";
import cuban from "../../../assets/cuban.svg";
import hawaiian from "../../../assets/hawaiian.svg";

import arabic from "../../../assets/arabic.svg";
import irish from "../../../assets/irish.svg";

import { CoffeeCard, Container, List, OurCoffees } from "./styles";

interface CoffeeProps {
  id: number;
  tags: string[];
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
      <OurCoffees>Nossos cafés</OurCoffees>
      <List>
        <CoffeeCard key={coffee.id}>
          <img src={coffee.image} alt="" />
          <div>
            {coffee.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </CoffeeCard>
      </List>
    </Container>
  );
}
