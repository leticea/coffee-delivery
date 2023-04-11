import {
  IllustrationImage,
  OrderInfo,
  OrderInfoWithIcon,
  Title,
} from "./styles";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";

import illustration from "../../assets/illustration.png";

export function Success() {
  return (
    <>
      <IllustrationImage>
        <img src={illustration} />
      </IllustrationImage>
      <Title>
        <p className="bold">Uhu! Pedido confirmado</p>
        <p className="normal">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Title>

      <OrderInfo>
        <OrderInfoWithIcon iconColor="purple">
          <MapPin size={15} weight="fill" />
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellow">
          <Timer size={15} weight="fill" />
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellowDark">
          <CurrencyDollarSimple size={15} />
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
