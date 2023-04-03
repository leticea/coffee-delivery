import styled from "styled-components";

export const Container = styled.div`
  height: 164.5rem;
  //border: 1px solid red;
`;



export const List = styled.ul`
  height: 136rem;
  margin: 5.4rem 16rem auto 16rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  list-style: none;

  //border: 1px solid red;
`;

export const CoffeeCard = styled.li`
  background: ${(props) => props.theme["gray-200"]};
  width: 25.6rem;
  height: 31rem;
  position: relative;
  border-radius: 6px 36px;

  display: flex;
  justify-content: center;
  align-items: flex-start;


  img {
    width: 12rem;
    height: 12rem;
    top: -20px;
    position: absolute;
  }
`;
