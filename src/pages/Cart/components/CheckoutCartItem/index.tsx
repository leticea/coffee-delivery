import { Trash } from "phosphor-react";
import {
  OrderCard,
  SelectedCoffeeCard,
  ButtonsContainer,
  RemoveButton,
} from "./styles";
import { useContext } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { EmptyCart } from "../EmptyCart";
import { QuantityButton } from "../../../../components/QuantityButton";
import ConfirmationCard from "../ConfirmationCard";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CheckoutCartItem({ coffee }: CoffeeCartCardProps) {
  const { removeCartItem, changeCartItemQuantity } =
    useContext(CartContext);
  //const [quantity, setQuantity] = useState(0);

  const coffeesTotal = coffee.price * coffee.quantity;

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }



  //onsole.log(cartItems);

  return (
    <>
      <SelectedCoffeeCard>
        <div>
          <img src={coffee.image} alt="" />
          <div>
            {coffee.name}
            <ButtonsContainer>
              <QuantityButton
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={coffee.quantity}
              />

              <RemoveButton type="button" onClick={handleRemove}>
                <Trash size={14} />
                Remover
              </RemoveButton>
            </ButtonsContainer>
          </div>
        </div>
        <p>R$ {moneyFormat(coffeesTotal)}</p>
        <hr />
      </SelectedCoffeeCard>
    </>
  );
}
