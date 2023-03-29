import styled from "styled-components";

export const Container = styled.div`
  height: 164.5rem;
  top: 648px;

  border: 1px solid red;
`;

export const OurCoffees = styled.h1`
  position: absolute;
  min-width: 19.3rem;
  height: 4.2rem;
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-800"]};

  margin: 3.2rem auto auto 16rem;

  border: 1px solid red;
`;
