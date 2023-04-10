import styled from "styled-components";

export const Title = styled.div`
  position: absolute;
  min-width: 35.5rem;
  height: 7.5rem;
  margin: 8rem auto auto 16rem;

  .bold {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-600"]};
  }

  .normal {
    font-size: 2rem;
    line-height: 180%;

    color: ${(props) => props.theme["gray-800"]};
  }

  //border: 1px solid red;
`;

export const OrderInfo = styled.div`
  width: 526px;
  height: 270px;
  border-radius: 6px 36px;

  margin: 19.2rem auto auto 16rem;
  padding: 4rem;

  background: white;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      ${(props) => props.theme["yellow-400"]},
      ${(props) => props.theme["purple-600"]}
    );
    z-index: -1;
    margin: -1px;
    border-radius: 6px 36px;
  }
`;
