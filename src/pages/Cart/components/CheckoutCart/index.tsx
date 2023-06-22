import { Trash } from "phosphor-react";
import {
  OrderCard,
  SelectedCoffeeCard,
  ButtonsContainer,
  RemoveButton,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { EmptyCart } from "../EmptyCart";
import { QuantityButton } from "../../../../components/QuantityButton";
import ConfirmationCard from "../ConfirmationCard";

// interface CoffeeCartCardProps {
//   coffee: CartItem;
// }

export function CheckoutCart() {
  const { cartItems, removeCartItem, changeCartItemQuantity } = useContext(CartContext);
  //const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    changeCartItemQuantity(cartItems.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(cartItems.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(cartItems.id);
  }

  console.log(cartItems);

  return (
    <>
      <OrderCard>
        {cartItems.length !== 0 ? (
          cartItems.map((coffee) => {
            const totalCoffees = coffee.price * coffee.quantity;
            return (
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
                <p>R$ {moneyFormat(totalCoffees)}</p>
                <hr />
              </SelectedCoffeeCard>
            );
          })
        ) : (
          <EmptyCart />
        )}
        <ConfirmationCard />
      </OrderCard>
    </>
  );
}
