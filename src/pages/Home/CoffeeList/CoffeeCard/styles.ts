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
  padding: 4px 8px;
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

export const Footer = styled.h1`
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
    text-align: center;
    align-items: center;
    gap: .4rem;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;
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

export const Buttons = styled.button`
  display: flex;
  justify-content: center;
`;
