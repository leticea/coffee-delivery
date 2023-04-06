import { AddressInfo, Headline, InfoContainer, Title } from "./styles";
import { MapPinLine } from "phosphor-react";

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

        <AddressInfo>
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
        </AddressInfo>
      </InfoContainer>
    </>
  );
}
