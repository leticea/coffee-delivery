import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckoutCart } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { Title } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.number().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.number().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  state: zod.string().min(1, "Informe o Estado"),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Cart() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });
  }
  return (
    <>
      <FormProvider {...confirmOrderForm}>
        <Title onSubmit={handleSubmit(handleConfirmOrder)}>
          <h1>Complete seu pedido</h1>
          <h1>Cafés selecionados</h1>
        </Title>
        <CheckoutForm />
        <Payment />
        <CheckoutCart />
      </FormProvider>
    </>
  );
}
