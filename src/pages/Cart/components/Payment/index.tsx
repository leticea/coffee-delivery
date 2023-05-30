import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { PaymentInfo, PaymentMethods } from "./styles";

export function Payment() {
  return (
    <>
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
    </>
  );
}
