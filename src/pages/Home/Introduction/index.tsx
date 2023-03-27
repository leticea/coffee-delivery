import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import {
  CoffeeImage,
  Container,
  InfoGrid,
  InfoText,
  InfoWithIcon,
} from "./styles";
import coffeeImage from "../../../assets/coffee-image.png";
import background from "../../../assets/bg.png";

export function Introduction() {
  return (
    <Container>
      <img src={background} alt="" />
      <InfoText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </InfoText>

      <InfoGrid>
        <InfoWithIcon iconColor="yellowDark">
          <ShoppingCart size={22} weight="fill" />
          Compra simples e segura
        </InfoWithIcon>

        <InfoWithIcon iconColor="grayDark">
          <Package size={22} weight="fill" />
          Embalagem mantém o café intacto
        </InfoWithIcon>

        <InfoWithIcon iconColor="yellow">
          <Timer size={22} weight="fill" />
          Entrega rápida e rastreada
        </InfoWithIcon>

        <InfoWithIcon iconColor="purple">
          <Coffee size={22} weight="fill" />O café chega fresquinho até você
        </InfoWithIcon>
      </InfoGrid>

      <CoffeeImage>
        <img src={coffeeImage} alt="" />
      </CoffeeImage>
    </Container>
  );
}
