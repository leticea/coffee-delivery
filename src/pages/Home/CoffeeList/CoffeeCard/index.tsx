import { useState } from "react";

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { moneyFormat } from "../../../../utils/moneyFormat";
import {
  Button,
  Buttons,
  CoffeesCard,
  Description,
  Footer,
  Name,
  Tags,
} from "./styles";

interface CoffeeProps {
  id: number;
  tags: string[];
  name: string;
  image: string;
  description: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { id, tags, name, image, description, price } = coffee;
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <CoffeesCard>
      <img src={image} alt="" />
      {tags.map((tag) => {
        return <Tags key={tag}>{tag}</Tags>;
      })}
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Footer>
        <p>
          R$
          <span>{moneyFormat(price)}</span>
        </p>
        <Buttons>
          <Minus size={14} onClick={handleDecrease} />
          {quantity}
          <Plus size={14} onClick={handleIncrease} />
        </Buttons>
        <Button>
          <ShoppingCartSimple weight="fill" size={21} />
        </Button>
      </Footer>
    </CoffeesCard>
  );
}
