import { MapPinLine } from "phosphor-react";
import { InfoContainer, Headline, AddressForm } from "./styles";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function CheckoutForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  console.log(formState.errors);

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
            error={errors.cep?.message}
          />
          <input
            className="street"
            placeholder="Rua"
            {...register("street")}
            error={errors.street?.message}
          />

          <section>
            <input
              className="number"
              type="number"
              placeholder="Número"
              {...register("number")}
              error={errors.number?.message}
            />
            <input
              className="complement"
              placeholder="Complemento"
              {...register("complement")}
              error={errors.complement?.message}
              rightText="Opcional"
            />
          </section>

          <section>
            <input
              className="district"
              placeholder="Bairro"
              {...register("district")}
              error={errors.district?.message}
            />
            <input
              className="city"
              placeholder="Cidade"
              {...register("city")}
              error={errors.city?.message}
            />
            <input
              className="state"
              placeholder="UF"
              {...register("state")}
              error={errors.uf?.message}
            />
          </section>
        </AddressForm>
      </InfoContainer>
    </>
  );
}
