import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { coffees } from "../../utils/coffees";

export function Home() {
  return (
    <>
      <Introduction />
      {coffees.map((coffee) => {
        console.log(coffee.image)
        return <CoffeeList key={coffee.id} coffee={coffee} />;
      })}
    </>
  );
}
