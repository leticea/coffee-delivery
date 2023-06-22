import { MapPinLine } from "phosphor-react";
import { InfoContainer, Headline, AddressForm } from "./styles";
import { useFormContext } from "react-hook-form";

export function CheckoutForm() {
  const { register } = useFormContext();

  return (
    <>
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
            type="number"
            placeholder="CEP"
            {...register("cep")}
          />
          <input className="street" placeholder="Rua" {...register("street")} />

          <section>
            <input
              className="number"
              type="number"
              placeholder="Número"
              {...register("number")}
            />
            <input
              className="complement"
              placeholder="Complemento"
              {...register("complement")}
            />
          </section>

          <section>
            <input
              className="district"
              placeholder="Bairro"
              {...register("district")}
            />
            <input
              className="city"
              placeholder="Cidade"
              {...register("city")}
            />
            <input className="state" placeholder="UF" {...register("state")} />
          </section>
        </AddressForm>
      </InfoContainer>
    </>
  );
}
