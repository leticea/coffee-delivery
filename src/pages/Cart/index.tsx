import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckoutCart } from "./components/CheckoutCart";
import { CheckoutForm } from "./components/CheckoutForm";
import { Payment } from "./components/Payment";
import { Title } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.number().min(1),
  street: zod.string().min(1),
  number: zod.number().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      console.log("fdfsdfs");

      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Cart() {
  const { cleanCart } = useContext(CartContext);

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();

  function confirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });

    console.log(data);

    cleanCart();
  }

  return (
    <>
      <form onSubmit={handleSubmit(confirmOrder)}>
        <FormProvider {...confirmOrderForm}>
          <Title>
            <h1>Complete seu pedido</h1>
            <h1>Cafés selecionados</h1>
          </Title>
          <CheckoutForm />
          <Payment />
          <CheckoutCart />
        </FormProvider>
      </form>
    </>
  );
}
