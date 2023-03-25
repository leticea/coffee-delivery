import { Container, InfoGrid, InfoText } from "./styles";
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

      <InfoGrid>
        <li>Compra simples e segura</li>
        <li>Entrega rápida e rastreada</li>
        <li>Embalagem mantém o café intacto</li>
        <li>O café chega fresquinho até você</li>
      </InfoGrid>


        <img src={coffeeImage} alt="" />
    </Container>
  );
}
