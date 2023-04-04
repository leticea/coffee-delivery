import { CoffeePrice, CoffeesCard, Description, Name, Tags } from "./styles";

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
      {/* <Description>{description}</Description>
      <CoffeePrice>R${price}</CoffeePrice> */}
    </CoffeesCard>
  );
}
