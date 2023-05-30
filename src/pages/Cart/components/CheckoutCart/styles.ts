import styled from "styled-components";

export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  user-select: none;

  //gap: 24px;

  position: absolute;
  width: 44.8rem;
  height: 49.8rem;
  left: 83.2rem;
  top: 18.7rem;

  border-radius: 6px 44px;
  background: ${(props) => props.theme["gray-200"]};

  //border: 1px solid red;

  hr {
    margin: 2.4rem 0 2.4rem 0;
    width: 36.8rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
  }
`;

export const SelectedCoffeeCard = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 0.8rem 0.4rem;
  gap: 48px;

  width: 36.8rem;
  height: 8rem;

  //border: 1px solid red;

  div {
    display: flex;

    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};

    width: 255px;
    height: 64px;

    //border: 1px solid blue;

    div {
      gap: 0.8rem;
      flex-direction: column;
    }
  }

  p {
    min-width: 6rem;
    height: 2.1rem;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme["gray-700"]};
    //border: 1px solid red;
  }

  img {
    margin: auto 2rem auto 0;
    width: 6.4rem;
    height: 6.4rem;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;

  align-items: center;
  gap: 8px;

  width: 17.1rem;
  height: 3.2rem;

  //border: 1px solid violet;
`;

export const QuantityButtons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.2rem;
  height: 3.2rem;
  border-radius: 6px;
  gap: 4px;

  font-size: 1.6rem;
  color: ${(props) => props.theme["gray-900"]};
  background-color: ${(props) => props.theme["gray-400"]};

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["purple-600"]};

    &:hover {
      color: ${(props) => props.theme["purple-800"]};
    }
  }
`;

export const RemoveButton = styled.button`
  width: 9.1rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0px 8px;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;

  font-size: 1.2rem;
  text-transform: uppercase;

  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-700"]};
  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme["purple-600"]};
  }

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }
`;

export const Amount = styled.section`
  width: 36.8rem;
  height: 9.2rem;
  display: grid;

  //border: 1px solid red;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.2rem;

    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};

    span {
      font-size: 1.6rem;
    }
  }

  h1 {
    display: flex;
    justify-content: space-between;
    align-self: end;

    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};

    span {
      font-size: 2rem;
    }
  }
`;

export const Button = styled.button`
  width: 36.8rem;
  height: 4.6rem;
  padding: 1.2rem 0.8rem;
  margin-top: 2.4rem;

  border: none;
  cursor: pointer;
  border-radius: 6px;

  background: ${(props) => props.theme["yellow-400"]};

  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;

  color: ${(props) => props.theme["white"]};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-600"]};
  }
`;
