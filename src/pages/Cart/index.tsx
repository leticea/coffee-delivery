import {
  AddressForm,
  Headline,
  InfoContainer,
  PaymentInfo,
  PaymentMethods,
  Title,
} from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

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

      <div>
        E
      </div>
    </>
  );
}
