import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import pageLogo from "../../assets/page-logo.svg";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink title="Home" to="/">
        <img src={pageLogo} alt="Logotipo Coffee Delivery" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity != 0 && <span>{cartQuantity}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
