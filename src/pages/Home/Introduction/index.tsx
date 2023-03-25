import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

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
        <li>
          <ShoppingCart size={22} weight="fill" />
          Compra simples e segura
        </li>

        <li>
          <Package size={22} weight="fill" />
          Embalagem mantém o café intacto
        </li>

        <li>
          <Timer size={22} weight="fill" />
          Entrega rápida e rastreada
        </li>

        <li>
          <Coffee size={22} weight="fill" />
          O café chega fresquinho até você
        </li>
      </InfoGrid>

      <img src={coffeeImage} alt="" />
    </Container>
  );
}
