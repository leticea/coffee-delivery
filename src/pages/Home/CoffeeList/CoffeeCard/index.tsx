import { ImgHTMLAttributes } from "react";
import { CoffeesCard } from "../styles";

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
  console.log("id", id);
  return (
    <CoffeesCard>
      <img src={image} alt="" />
      {tags.map((tag) => {
        return <span>{tag}</span>;
      })}
      <h1>{name}</h1>
      <p>{description}</p>
      <div>{price}</div>
    </CoffeesCard>
  );
}
