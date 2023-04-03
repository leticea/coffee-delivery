import styled from "styled-components";

export const CoffeesCard = styled.li`
  background: ${(props) => props.theme["gray-200"]};
  width: 25.6rem;
  height: 31rem;
  position: relative;
  border-radius: 6px 36px;

  display: flex;
  /* justify-content: center;
  align-items: flex-start; */

  border: 1px solid red;

  img {
    display: flex;
    justify-content: center;
    //align-items: center;
    width: 12rem;
    height: 12rem;
    top: -20px;
    left: 27%;
    position: absolute;

    border: 1px solid red;
  }
`;

export const Tags = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  min-width: 8.1rem;
  height: 2.1rem;
  left: 20%;
  top: 11.2rem;
  border-radius: 100px;
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-600"]};

  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;

  border: 1px solid red;
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoffeePrice = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
