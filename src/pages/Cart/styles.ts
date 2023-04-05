import styled from "styled-components";

export const Checkout = styled.div`
  width: 100%;
  height: 2.3rem;
  margin: 4rem 0;
  padding: 0 0 0 160px;
  gap: 15rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  font-family: "Baloo 2";
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-800"]};

  border: 1px solid red;
`;
