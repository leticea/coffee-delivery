import styled from "styled-components";

export const CoffeesCard = styled.li`
  background: ${(props) => props.theme["gray-200"]};
  width: 25.6rem;
  height: 31rem;
  position: relative;
  border-radius: 6px 36px;

  display: flex;
  justify-content: center;

  //border: 1px solid red;

  img {
    display: flex;
    justify-content: center;
    width: 12rem;
    height: 12rem;
    top: -20px;
    left: 27%;
    position: absolute;

    //border: 1px solid red;
  }
`;

export const Tags = styled.span`
  display: flex;
  align-items: center;

  margin: 0 0.4rem;
  position: relative;
  max-width: 19.5rem;
  height: 2.1rem;
  padding: 0.4rem 0.8rem;
  top: 11.2rem;
  border-radius: 100px;

  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-600"]};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;

  //border: 1px solid red;
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  height: 2.6rem;
  left: 2rem;
  right: 2rem;
  top: 14.9rem;

  color: ${(props) => props.theme["gray-800"]};
  font-family: "Baloo 2";
  font-size: 2rem;
  line-height: 130%;

  //border: 1px solid red;
`;

export const Description = styled.h1`
  display: flex;
  text-align: center;

  position: absolute;
  height: 3.6rem;
  left: 2rem;
  right: 2rem;
  top: 18.3rem;

  color: ${(props) => props.theme["gray-600"]};
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;

  //border: 1px solid red;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: absolute;
  height: 3.8rem;
  left: 2.4rem;
  right: 2.4rem;
  bottom: 2rem;

  //border: 1px solid red;

  p {
    width: 6.7rem;
    height: 3.1rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.theme["gray-700"]};

    //border: 1px solid red;
  }

  span {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2.4rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const Buttons = styled.div`
  width: 7.2rem;
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;

  margin: 0 0 0 16px;

  font-weight: 400;
  font-size: 1.6rem;
  color: ${(props) => props.theme["gray-900"]};
  background-color: ${(props) => props.theme["gray-400"]};

  span {
    font-weight: 400;
    font-family: "Roboto";
    font-size: 1.6rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["purple-600"]};
    user-select: none;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-800"]};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  border-radius: 6px;
  border: none;
  padding: 0.8rem;
  cursor: pointer;

  background: ${(props) => props.theme["purple-800"]};
  color: ${(props) => props.theme["gray-200"]};
  transition: all 0.2s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["purple-600"]};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
