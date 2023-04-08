import {
  AddressForm,
  Headline,
  InfoContainer,
  OrderCard,
  PaymentInfo,
  PaymentMethods,
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

import traditional from "../../assets/traditional.svg";

export function Cart() {
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
          <input className="cep" type="text" placeholder="CEP" />
          <input className="street" type="text" placeholder="Rua" />

          <section>
            <input className="number" type="text" placeholder="Número" />
            <input
              className="complement"
              type="text"
              placeholder="Complemento"
            />
          </section>

          <section>
            <input className="district" type="text" placeholder="Bairro" />
            <input className="city" type="text" placeholder="Cidade" />
            <input className="state" type="text" placeholder="UF" />
          </section>
        </AddressForm>
      </InfoContainer>
      <PaymentInfo>
        <h1>
          <CurrencyDollar size={22} />
          Pagamento
        </h1>
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
              <span>
                <div className="icons">
                  <Minus size={14} />
                  1
                  <Plus size={14} />
                </div>

                <button>
                  <Trash size={14} />
                  Remover
                </button>
              </span>
            </div>
          </div>
          <p>R$ 9,90</p>
        </SelectedCoffeeCard>
      </OrderCard>
    </>
  );
}
