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
          <div>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon>
          <Timer size={15} />
          <div>
            <p>Previsão de entrega</p>
            <b>20 min - 30 min</b>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon>
          <CurrencyDollar size={15} />
          <div>
            <p>Pagamento na entrega</p>
            <b>Cartão de Crédito</b>
          </div>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
