import styled from "styled-components";

export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  user-select: none;

  gap: 24px;

  position: absolute;
  width: 44.8rem;
  min-height: 49.8rem;
  left: 83.2rem;
  top: 18.7rem;

  border-radius: 6px 44px;
  background: ${(props) => props.theme["gray-200"]};

  //border: 1px solid red;
`;

export const SelectedCoffeeCard = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 0.8rem 0.4rem;
  gap: 48px;

  //margin: auto;

  min-width: 36.8rem;
  height: 8rem;
  margin-bottom: 2.4rem;

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
      //border: 1px solid blue;
    }
  }

  hr {
    position: absolute;
    margin: 9.6rem 0;
    width: 36.8rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    //border: 1px solid red;
  }

  p {
    min-width: 8rem;
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
