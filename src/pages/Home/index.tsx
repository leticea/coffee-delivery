import { CoffeeList } from "./CoffeeList";
import { Introduction } from "./Introduction";
import { OurCoffees } from "./CoffeeList/components/OurCoffees";
//import { CoffeeProps } from "./CoffeeList/components/CoffeeCard";

export function Home() {
  return (
    <>
      <Introduction />
      <OurCoffees />
      <CoffeeList
        receiveCartValue={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}
