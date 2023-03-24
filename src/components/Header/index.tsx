import {  NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import logoPage from "../../assets/logo-page.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoPage} alt="Logotipo Coffee Delivery" />
      <nav>
        <NavLink to="/" title="Localização">
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </NavLink>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
