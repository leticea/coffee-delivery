import { moneyFormat } from "../../../../utils/moneyFormat";
import { Button, Confirmation } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export default function ConfirmationCard() {
  const { totalCartItems } = useContext(CartContext);

  const DELIVERY_PRICE = 5;
  const cartTotal = DELIVERY_PRICE + totalCartItems;

  return (
    <>
      <Confirmation>
        <p>
          Total de itens <span>R$ {moneyFormat(totalCartItems)}</span>
        </p>
        <p>
          Entrega <span>R$ {moneyFormat(DELIVERY_PRICE)}</span>
        </p>
        <h1>
          Total <span>R$ {moneyFormat(cartTotal)}</span>
        </h1>
      </Confirmation>
      <Button type="submit" disabled={cartTotal <= 5}>
        Confirmar pedido
      </Button>
    </>
  );
}
