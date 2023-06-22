import {
  IllustrationImage,
  OrderInfo,
  OrderInfoWithIcon,
  Title,
} from "./styles";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";

import illustration from "../../assets/illustration.png";
import { OrderData } from "../Cart";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { paymentMethods } from "../Cart/components/Payment";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <>
      <IllustrationImage>
        <img src={illustration} />
      </IllustrationImage>
      <Title>
        <p className="bold">Uhu! Pedido confirmado</p>
        <p className="normal">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Title>

      <OrderInfo>
        <OrderInfoWithIcon iconColor="purple">
          <MapPin size={15} weight="fill" />
          <div>
            <p>
              Entrega em <strong>{state.street}, {state.number}</strong>
            </p>
            <p>{state.district} - {state.city}, {state.state}</p>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellow">
          <Timer size={15} weight="fill" />
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </div>
        </OrderInfoWithIcon>

        <OrderInfoWithIcon iconColor="yellowDark">
          <CurrencyDollarSimple size={15} />
          <div>
            <p>Pagamento na entrega</p>
            <strong>{paymentMethods[state.paymentMethod].label}</strong>
          </div>
        </OrderInfoWithIcon>
      </OrderInfo>
    </>
  );
}
