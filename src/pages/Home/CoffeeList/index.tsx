import { CoffeeCard, Container, List, OurCoffees } from "./styles";

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

export function CoffeeList() {
  return (
    <Container>
      <OurCoffees>Nossos cafés</OurCoffees>
      <List>
        <CoffeeCard>
          <img src={traditional} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={american} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={creamy} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={iced} alt="" />
        </CoffeeCard>

        <CoffeeCard>
          <img src={coffeeWithMilk} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={latte} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={cappuccino} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={macchiato} alt="" />
        </CoffeeCard>

        <CoffeeCard>
          <img src={mocaccino} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={hotChocolate} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={cuban} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={hawaiian} alt="" />
        </CoffeeCard>

        <CoffeeCard>
          <img src={arabic} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={irish} alt="" />
        </CoffeeCard>
      </List>
    </Container>
  );
}
