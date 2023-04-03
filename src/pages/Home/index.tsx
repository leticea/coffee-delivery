import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { OurCoffees } from "./CoffeeList/OurCoffees";

export function Home() {
  return (
    <>
      <Introduction />
      <OurCoffees />
      <CoffeeList />
    </>
  );
}
