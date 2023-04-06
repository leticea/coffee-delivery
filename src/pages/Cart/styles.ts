import styled from "styled-components";

export const Title = styled.div`
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

export const InfoContainer = styled.div`
  //display: flex;
  /* flex-direction: column;
  align-items: flex-start; */
  margin: -20px 0 0 160px;
  //gap: 32px;

  width: 64rem;
  height: 37.2rem;

  border: 1px solid red;
`;

export const Headline = styled.div`
  height: 4.4rem;
  margin: 4rem 4rem auto 4rem;

  border: 1px solid red;

  h1 {
    display: flex;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    margin-top: 0.2rem;
    padding: 0 3.1rem;
    font-family: "Roboto";
    font-weight: 400;
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

  background: ${(props) => props.theme["gray-300"]};

  border: 0.1rem solid ${(props) => props.theme["gray-400"]};

  border-radius: 4px;

  //border: 1px solid red;

  .cep {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    gap: 0.4rem;

    width: 200px;
    height: 42px;
    font-size: 1.4rem;


  }
`;

// addressInfo

// paymentInfo
