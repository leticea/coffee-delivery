import { Title } from "./styles";

export function Success() {
  return (
    <>
      <Title>
        <p className="bold">Uhu! Pedido confirmado</p>
        <p className="normal">Agora é só aguardar que logo o café chegará até você</p>
      </Title>
    </>
  );
}
