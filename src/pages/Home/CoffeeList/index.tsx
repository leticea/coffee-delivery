import { Container, List, OurCoffees } from "./styles";
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
        <li>
          <img src={traditional} alt="" />
        </li>
        <li>
          <img src={american} alt="" />
        </li>
        <li>
          <img src={creamy} alt="" />
        </li>
        <li>
          <img src={iced} alt="" />
        </li>

        <li>
          <img src={coffeeWithMilk} alt="" />
        </li>
        <li>
          <img src={latte} alt="" />
        </li>
        <li>
          <img src={cappuccino} alt="" />
        </li>
        <li>
          <img src={macchiato} alt="" />
        </li>

        <li>
          <img src={mocaccino} alt="" />
        </li>
        <li>
          <img src={hotChocolate} alt="" />
        </li>
        <li>
          <img src={cuban} alt="" />
        </li>
        <li>
          <img src={hawaiian} alt="" />
        </li>

        <li>
          <img src={arabic} alt="" />
        </li>
        <li>
          <img src={irish} alt="" />
        </li>
      </List>
    </Container>
  );
}
