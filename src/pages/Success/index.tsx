import { OrderInfo, Title } from "./styles";
import { MapPin } from "phosphor-react";

export function Success() {
  return (
    <>
      <Title>
        <p className="bold">Uhu! Pedido confirmado</p>
        <p className="normal">Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <OrderInfo>
        {/* <section>
          <MapPin size={15} />
          <p>Entrega em Rua João Daniel Martinelli, 102</p>
          <p>Farrapos - Porto Alegre, RS</p>
        </section> */}
      </OrderInfo>
    </>
  );
}
