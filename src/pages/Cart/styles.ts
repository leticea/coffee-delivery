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
  display: flex;
  /* flex-direction: column;
  align-items: flex-start; */
  margin: -20px 0 0 160px;
  //gap: 32px;

  width: 64rem;
  height: 37.2rem;

  border: 1px solid red;
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;

  margin: 4rem 4rem 0 4rem;
  //gap: 8px;

  width: 56rem;
  height: 4.4rem;

  border: 1px solid red;

  h1 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0 0 0 2.2rem;
    
    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    font-family: "Roboto";
    font-size: 1.4rem;
    line-height: 130%;

    margin: 0 0 0 2.2rem;

    color: ${(props) => props.theme["gray-700"]};
  }

  svg {
    color: ${(props) => props.theme["yellow-600"]};
  }
`;

// addressInfo

// paymentInfo
