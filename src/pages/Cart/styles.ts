import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 2.3rem;
  margin: 4rem 0;
  padding: 0 0 0 160px;

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

export const AddressInfo = styled.form`
  width: 56rem;
  height: 21.6rem;
  margin: 3.2rem auto auto auto;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  //border: 1px solid red;

  input {
    border: 0.1rem solid ${(props) => props.theme["gray-400"]};
    box-shadow: 0 0 0 0;
    background: ${(props) => props.theme["gray-300"]};

    padding: 1.2rem;
    font-size: 1.4rem;

    border-radius: 4px;

    &:focus {
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

    //border: 1px solid red;
  }

  .city {
    width: 27rem;
    margin: 0 1.2rem auto auto;

    //border: 1px solid red;
  }

  .state {
    width: 6.4rem;

    //border: 1px solid red;
  }
`;

export const PaymentInfo = styled.div`
  width: 64rem;
  height: 20.7rem;

  margin: 40.5rem 0 10rem 16rem;
  padding: 4rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-200"]};

  border: 1px solid red;

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
  width: 50rem;
  height: 5rem;

  border: 1px solid red;
`;
