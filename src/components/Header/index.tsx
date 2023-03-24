import logoPage from "../../assets/logo-page.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoPage} alt="" />
      Location
      Carrinho
    </HeaderContainer>
  );
}
