import styled from "styled-components";

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
