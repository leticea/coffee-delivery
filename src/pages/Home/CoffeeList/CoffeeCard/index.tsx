import { ShoppingCart } from "phosphor-react";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { Buttons, CoffeesCard, Description, Footer, Name, Tags } from "./styles";

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
  return (
    <CoffeesCard>
      <img src={image} alt="" />
      {tags.map((tag) => {
        return <Tags>{tag}</Tags>
      })}
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Footer>
        <p>R$
          <span>{moneyFormat(price)}</span>
        </p>
        <Buttons>
          <span>
            - 1 +
          </span>
          <ShoppingCart weight="fill" size={22} />
        </Buttons>
      </Footer>
    </CoffeesCard>
  );
}
