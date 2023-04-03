import { CoffeeCard, Container, List, OurCoffees } from "./styles";



export function CoffeeList() {
  return (
    <Container>
      <OurCoffees>Nossos cafés</OurCoffees>
      <List>
        <CoffeeCard>
          <img src={traditional} alt="" />4
        </CoffeeCard>
        <CoffeeCard>
          <img src={american} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={creamy} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={iced} alt="" />
        </CoffeeCard>

        <CoffeeCard>
          <img src={coffeeWithMilk} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={latte} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={cappuccino} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={macchiato} alt="" />
        </CoffeeCard>

        <CoffeeCard>
          <img src={mocaccino} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={hotChocolate} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={cuban} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={hawaiian} alt="" />
        </CoffeeCard>

        <CoffeeCard>
          <img src={arabic} alt="" />
        </CoffeeCard>
        <CoffeeCard>
          <img src={irish} alt="" />
        </CoffeeCard>
      </List>
    </Container>
  );
}
