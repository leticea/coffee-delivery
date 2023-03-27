import styled from "styled-components";

export const Container = styled.main`
  height: 54.4rem;
  display: flex;
  align-items: center;

  border: 1px solid red;

  img {
    width: 100%;
    height: 54.4rem;
    position: absolute;
  }
`;

export const InfoText = styled.div`
  width: 58.8rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin: 9.4rem 69.2rem 25.8rem 16rem;
  position: absolute;

  //border: 1px solid red;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const InfoGrid = styled.ul`
  width: 56.7rem;
  height: 8.4rem;
  margin: 35.2rem 71.3rem 10.8rem 16rem;

  font-size: 2.6rem;
  line-height: 130%;

  display: grid;
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  gap: 1.2rem;

  border: 1px solid red;
`;

const ICON_COLORS = {
  yellow: "yellow-600",
  light: "yellow-400",
  purple: "purple-600",
  gray: "gray-700",
} as const;

interface InfoWithIconProps {
  iconColor: "yellow" | "light" | "purple" | "gray";
}

export const InfoWithIcon = styled.li<InfoWithIconProps>`
  color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
`;

export const CoffeeImage = styled.span`
  img {
    width: 47.6rem;
    height: 36rem;
    position: relative;
    margin: 9.2rem 16rem 9.2rem 80.4rem;

    //border: 1px solid red;
  }
`;
