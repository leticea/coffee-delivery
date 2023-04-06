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
          {/* <section>
            <div>
              <label htmlFor="cep"></label>
              <input id="cep" type="text" placeholder="CEP" />
            </div>
          </section> */}
        </AddressInfo>
      </InfoContainer>
    </>
  );
}

