import {
  AddressForm,
  Amount,
  Button,
  ButtonsContainer,
  Headline,
  InfoContainer,
  OrderCard,
  PaymentInfo,
  PaymentMethods,
  QuantityButtons,
  RemoveButton,
  SelectedCoffeeCard,
  Title,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import traditional from "../../assets/traditional.svg";

import { coffees } from "../../utils/coffees";

import { CoffeeProps } from "../Home/CoffeeList/CoffeeCard";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.number().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.number().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  state: zod.string().min(1, "Informe o Estado"),
});

// interface CoffeeOrder {
//   id: number;
//   name: string;
//   price: number;
// }

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function Cart({ coffee }: CoffeeCardProps) {
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeProps[]>(coffees);
  const [quantity, setQuantity] = useState(0);

  //const { id } = coffee;

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  function handleIncrease() {
    setQuantity((state) => {
      return state + 1;
    });
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => {
        return state - 1;
      });
    }
  }

  function removeSelectedCoffee(id: number) {
    coffees.filter((coffee) => {
      return coffee.id !== id;
    });

    console.log("clicou");
    //setCoffeeOrders(undeletedCoffees);
  }

  // function handleCreateNewCoffeeOrder(coffees: CoffeeOrder) {
  //   const newOrder: CoffeeOrder = {
  //     id: coffees.id,
  //     name: coffees.name,
  //     price: coffees.price,
  //   };

  //   setCoffeeOrders(state => [...state, newOrder]);
  // }

  // function handleCreateNewOrder(data: any) {
  //   console.log(data);
  // };

  return (
    <>
      <Title>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </Title>
      <InfoContainer>
        <Headline>
          <h1>
            <MapPinLine size={22} />
            Endereço de Entrega
          </h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </Headline>

        <AddressForm>
          <input
            className="cep"
            type="text"
            placeholder="CEP"
            {...register("cep", { valueAsNumber: true })}
          />
          <input
            className="street"
            type="text"
            placeholder="Rua"
            {...register("street")}
          />

          <section>
            <input
              className="number"
              type="text"
              placeholder="Número"
              {...register("number")}
            />
            <input
              className="complement"
              type="text"
              placeholder="Complemento"
              {...register("complement")}
            />
          </section>

          <section>
            <input
              className="district"
              type="text"
              placeholder="Bairro"
              {...register("district")}
            />
            <input
              className="city"
              type="text"
              placeholder="Cidade"
              {...register("city")}
            />
            <input
              className="state"
              type="text"
              placeholder="UF"
              {...register("state")}
            />
          </section>
        </AddressForm>
      </InfoContainer>
      <PaymentInfo>
        <span>
          <CurrencyDollar size={22} />
          <p className="payment">Pagamento</p>
        </span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <PaymentMethods>
          <div className="credit">
            <CreditCard size={16} />
            Cartão de crédito
          </div>
          <div className="debit">
            <Bank size={16} />
            Cartão de débito
          </div>
          <div className="money">
            <Money size={16} />
            Dinheiro
          </div>
        </PaymentMethods>
      </PaymentInfo>

      <OrderCard>
        <SelectedCoffeeCard>
          <div>
            <img src={traditional} alt="" />
            <div>
              Expresso Tradicional
              <ButtonsContainer>
                <QuantityButtons>
                  <Minus size={14} onClick={handleDecrease} />
                  {quantity}
                  <Plus size={14} onClick={handleIncrease} />
                </QuantityButtons>

                <RemoveButton onClick={removeSelectedCoffee}>
                  <Trash size={14} />
                  Remover
                </RemoveButton>
              </ButtonsContainer>
            </div>
          </div>
          <p>R$ 9,90</p>
        </SelectedCoffeeCard>
        <hr />
        <SelectedCoffeeCard>
          <div>
            <img src={traditional} alt="" />
            <div>
              Expresso Tradicional
              <ButtonsContainer>
                <QuantityButtons>
                  <Minus size={14} />
                  1
                  <Plus size={14} />
                </QuantityButtons>

                <RemoveButton>
                  <Trash size={14} />
                  Remover
                </RemoveButton>
              </ButtonsContainer>
            </div>
          </div>
          <p>R$ 9,90</p>
        </SelectedCoffeeCard>
        <hr />

        <Amount>
          <p>
            Total de itens <span>R$ 29,70</span>
          </p>
          <p>
            Entrega <span>R$ 3,50</span>
          </p>
          <h1>
            Total <span>R$ 33,20</span>
          </h1>
        </Amount>
        <Button>Confirmar pedido</Button>
      </OrderCard>
    </>
  );
}
