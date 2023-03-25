import { CoffeeImage, Container, InfoText } from "./styles";
import coffeeImage from "../../../assets/coffee-image.png";

export function Introduction() {
  return (
    <Container>
      <InfoText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </InfoText>

        <img src={coffeeImage} alt="" />

    </Container>
  );
}
