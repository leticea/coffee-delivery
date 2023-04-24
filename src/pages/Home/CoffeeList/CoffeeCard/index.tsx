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
import { coffees } from "../../../../utils/coffees";

export interface CoffeeProps {
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
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeProps[]>(coffees);

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

  const handleQuantity = quantity;
  const isSubmitDisabled = !handleQuantity;

  function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    const newOrder: CoffeeProps = {
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      tags: [],
      description: ""
    };

    setCoffeeOrders(state => [...state, newOrder]);
    console.log(newOrder);
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
        <Button
          onClick={handleAddToCart}
          disabled={isSubmitDisabled}
          type="submit"
        >
          <ShoppingCartSimple weight="fill" size={21} />
        </Button>
      </Footer>
    </CoffeesCard>
  );
}
