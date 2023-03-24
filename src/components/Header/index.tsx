import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import logoPage from "../../assets/logo-page.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoPage} alt="Logotipo Coffee Delivery" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
