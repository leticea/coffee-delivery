import { useContext, useState } from "react";
import { CartContext } from "../../../../../contexts/CartContext";

import { ShoppingCartSimple } from "phosphor-react";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import {
  Button,
  Buttons,
  CoffeesCard,
  Description,
  Footer,
  Name,
  Tags,
} from "./styles";
import { QuantityButton } from "../../../../../components/QuantityButton";

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
  const { addCoffeeToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  function addToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  const handleQuantity = quantity;
  const isSubmitDisabled = !handleQuantity;

  return (
    <CoffeesCard key={coffee.id}>
      <img src={coffee.image} alt="" />
      {coffee.tags.map((tag) => {
        return <Tags key={tag}>{tag}</Tags>;
      })}
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <Footer>
        <p>
          R$
          <span>{moneyFormat(coffee.price)}</span>
        </p>
        <Buttons>
          <QuantityButton
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
        </Buttons>
        <Button onClick={addToCart} disabled={isSubmitDisabled}>
          <ShoppingCartSimple weight="fill" size={21} />
        </Button>
      </Footer>
    </CoffeesCard>
  );
}
