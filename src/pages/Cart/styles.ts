import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 2.3rem;
  margin: 4rem 0;
  padding: 0 3rem 0 16rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  place-content: center;

  font-family: "Baloo 2";
  font-size: 2.5rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-800"]};

  //border: 1px solid red;
`;

export const InfoContainer = styled.div`
  width: 64rem;
  height: 37.2rem;
  position: absolute;
  margin: -2rem 0 0 16rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-200"]};

  //border: 1px solid red;
`;

export const Headline = styled.div`
  height: 4.4rem;
  margin: 4rem 4rem auto 4rem;

  h1 {
    display: flex;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    margin-top: 0.2rem;
    padding: 0 3.1rem;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};
  }

  svg {
    margin: 0 0.8rem 0 0;
    color: ${(props) => props.theme["yellow-600"]};
  }
`;

export const AddressForm = styled.form`
  width: 56rem;
  height: 21.6rem;
  margin: 3.2rem auto auto auto;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  //border: 1px solid red;

  input {
    padding: 1.2rem;
    font-size: 1.4rem;
    border: 0.1rem solid ${(props) => props.theme["gray-400"]};
    border-radius: 4px;
    background: ${(props) => props.theme["gray-300"]};

    &:focus {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
      border: 0.1rem solid ${(props) => props.theme["yellow-600"]};
    }
  }

  .cep {
    width: 20rem;
  }

  .street {
    width: 100%;
  }

  .number {
    width: 20rem;
    margin: 0 1.2rem auto auto;
  }

  .complement {
    width: 34.6rem;
  }

  .district {
    width: 20rem;
    margin: 0 1.2rem auto auto;
  }

  .city {
    width: 27rem;
    margin: 0 1.2rem auto auto;
  }

  .state {
    width: 6.4rem;
  }
`;

export const PaymentInfo = styled.div`
  width: 64rem;
  height: 20.7rem;

  margin: 40.5rem 0 10rem 16rem;
  padding: 4rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-200"]};

  //border: 1px solid red;

  h1 {
    display: flex;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    margin-top: 0.2rem;
    padding: 0 3rem;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-700"]};
  }

  svg {
    margin: 0 0.8rem 0 0;
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

    //border: 1px solid red;
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
    justify-content: flex-start;
    padding: 0 1.6rem;
    background: ${(props) => props.theme["gray-400"]};
  }
`;

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
    margin-top: 24px;
    width: 36.8rem;
    border:  1px solid ${(props) => props.theme["gray-400"]};
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

export const Button = styled.button`
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

  svg {
    color: ${(props) => props.theme["purple-600"]};
  }
`;
