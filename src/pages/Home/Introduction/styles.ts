import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid red;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 588px;
  height: 192px;

  border: 1px solid red;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;

    color: ${(props) => props.theme["gray-900"]};
  }
`;
