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

export const OrderInfo = styled.ul`
  width: 526px;
  height: 270px;

  margin: 19.2rem auto auto 16rem;
  padding: 4rem;
  border-radius: 6px 36px;

  position: relative;
  background: white;

  display: flex;
  flex-direction: column;

  list-style: none;
  gap: 3.2rem;

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

export const OrderInfoWithIcon = styled.li`
  border: 1px solid red;

  height: 5.2rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["gray-700"]};

  p {
    font-size: 1.6rem;
  }

  b {
    font-size: 1.6rem;
  }

  svg {
    margin: 0 2rem 0 0;
    border-radius: 9999px;
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.8rem;
    padding: 0.8rem;
    border-radius: 9999px;

    background: ${(props) => props.theme["gray-400"]};

    width: 3.2rem;
    height: 3.2rem;
  }
`;
