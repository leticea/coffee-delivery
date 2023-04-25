import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { CoffeeList } from "../../pages/Home/CoffeeList";

export function DefaultLayout() {
  function receiveCartValue() {
    console.log('aqui')
  }
  return (
    <LayoutContainer>
        <Header />
        <Outlet context={{list, receiveCartValue}}/>
    </LayoutContainer>
  );
}
