import { OrderInfo, OrderInfoWithIcon, Title } from "./styles";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";

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
        <OrderInfoWithIcon iconColor="purple">
          <MapPin size={15} weight="fill" />
          <div>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellow">
          <Timer size={15} weight="fill" />
          <div>
            <p>Previsão de entrega</p>
            <b>20 min - 30 min</b>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellowDark">
          <CurrencyDollarSimple size={15} />
          <div>
            <p>Pagamento na entrega</p>
            <b>Cartão de Crédito</b>
          </div>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
