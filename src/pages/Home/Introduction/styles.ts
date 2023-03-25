import styled from "styled-components";

// export const ICON_COLORS = {
//   yellow-dark: "yellow-600",
//   yellow:  "yellow-400",
//   purple: "purple-600",
//   gray: "gray-700",
// } as const;

// interface IconProps {
//   iconColor: keyof typeof ICON_COLORS;
// }

export const Container = styled.main`
  width: 100%;
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid red;

  img {
    width: 476px;
    height: 360px;

    display: flex;
    align-items: flex-end;
    justify-content: end;
    margin: 92px 160px 92px 804px;

    border: 1px solid red;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;

  width: 588px;
  height: 192px;

  margin: 94px 692px 258px 160px;
  position: absolute;

  border: 1px solid red;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;

    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const InfoGrid = styled.ul`
  width: 567px;
  height: 84px;
  margin: 352px 713px 108px 160px;

  display: grid;
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  border: 1px solid red;
`;