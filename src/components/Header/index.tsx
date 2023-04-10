import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import pageLogo from "../../assets/page-logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink title="Home" to="/">
        <img src={pageLogo} alt="Logotipo Coffee Delivery" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
