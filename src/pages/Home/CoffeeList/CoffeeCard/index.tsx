
interface CoffeeProps {
  id: number;
  tags: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (

  )
}