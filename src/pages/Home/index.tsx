import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { coffees } from "../../utils/coffees";
import { OurCoffees } from "./OurCoffees";

export function Home() {
  return (
    <>
      <Introduction />
      <OurCoffees />

      {coffees.map((coffee) => {
        return <CoffeeList key={coffee.id} coffee={coffee} />;
      })}
    </>
  );
}
