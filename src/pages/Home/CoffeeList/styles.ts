import styled from "styled-components";

export const Container = styled.div`
  height: 164.5rem;
  //border: 1px solid red;
`;

export const OurCoffees = styled.h1`
  min-width: 19.3rem;
  height: 4.2rem;
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-800"]};

  margin: 3.2rem auto auto 16rem;

  //border: 1px solid red;
`;

export const List = styled.ul`
  height: 136rem;
  margin: 5.4rem 16rem auto 16rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);


  list-style: none;

  border: 1px solid red;
`;
