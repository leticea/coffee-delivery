import { OrderInfo, OrderInfoWithIcon, Title } from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <>
      <Title>
        <p className="bold">Uhu! Pedido confirmado</p>
        <p className="normal">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Title>

      <OrderInfo>
        <OrderInfoWithIcon>
          <MapPin size={15} />
          <p>
            Entrega em <span>Rua João Daniel Martinelli, 102</span>
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon>
          <Timer size={15} />
          <p>Previsão de entrega</p>
          <span>20 min - 30 min</span>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon>
          <CurrencyDollar size={15} />
          <p>Pagamento na entrega</p>
          <span>Cartão de Crédito</span>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
