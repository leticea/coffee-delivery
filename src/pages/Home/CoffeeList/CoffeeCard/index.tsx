import { ImgHTMLAttributes } from "react";

interface CoffeeProps {
  id: number;
  tags: string;
  name: string;
  description: string;
  price: number;
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
  image: ImageProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (

  )
}