import { ShoppingCartSimple } from "phosphor-react";
import { EmptyCartCard } from "./styles";

export function EmptyCart() {
  return (
    <EmptyCartCard>
        Seu carrinho está vazio <ShoppingCartSimple />
    </EmptyCartCard>
  );
}
