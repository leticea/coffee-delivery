import { Minus, Plus } from "phosphor-react";
import { QuantityButtons } from "./styles";

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  return (
    <>
      <QuantityButtons>
        <Minus size={14} onClick={handleDecrease} />
        {coffee.quantity}
        <Plus size={14} onClick={handleIncrease} />
      </QuantityButtons>
    </>
  );
}
