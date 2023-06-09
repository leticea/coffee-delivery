import styled from "styled-components";

export const PaymentInfo = styled.div`
  width: 64rem;
  height: 20.7rem;

  margin: 40.5rem 0 10rem 16rem;
  padding: 4rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-200"]};

  //border: 1px solid red;

  .payment {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    display: flex;
    padding: 0;

    margin-left: -0.4rem;

    color: ${(props) => props.theme["gray-800"]};
    //border: 1px solid red;
  }

  span {
    display: flex;

    svg {
      display: flex;
      align-self: flex-end;
      margin-top: 0.2rem;
    }
  }

  p {
    margin-top: 0.2rem;
    padding: 0 3rem;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};
  }

  svg {
    margin: 0 1.2rem 0 0;
    color: ${(props) => props.theme["purple-600"]};
  }
`;

export const PaymentMethods = styled.section`
  width: 56rem;
  height: 5.1rem;

  margin: 3.2rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  color: ${(props) => props.theme["gray-700"]};

  //border: 1px solid red;

  div {
    font-size: 1.2rem;
    text-transform: uppercase;
    line-height: 160%;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;

    //border: 1px solid red;
  }

  div:hover {
    background: ${(props) => props.theme["gray-500"]};
  }

  div:active {
    background: ${(props) => props.theme["purple-100"]};
    border: 1px solid ${(props) => props.theme["purple-600"]};
  }

  .credit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17rem;
    background: ${(props) => props.theme["gray-400"]};
  }

  .debit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17rem;
    background: ${(props) => props.theme["gray-400"]};
  }

  .money {
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    background: ${(props) => props.theme["gray-400"]};
  }
`;
