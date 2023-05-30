import { MapPinLine } from "phosphor-react";
import { InfoContainer, Headline, AddressForm } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.number().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.number().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  state: zod.string().min(1, "Informe o Estado"),
});

export function OrderForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

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
            type="text"
            placeholder="CEP"
            {...register("cep")}
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
    </>
  );
}
