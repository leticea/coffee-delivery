import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 16rem;

  nav {
    display: flex;
    gap: 1.2rem;

    // border: 1px solid red;

    span {
      min-width: 14.3rem;
      height: 3.8rem;
      padding: 8px;
      font-size: 1.4rem;
      border-radius: 6px;
      gap: 0.4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["purple-800"]};
      background-color: ${(props) => props.theme["purple-100"]};

      svg {
        color: ${(props) => props.theme["purple-600"]};
      }

      //border: 1px solid red;
    }

    a {
      width: 3.8rem;
      height: 3.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background-color: ${(props) => props.theme["yellow-100"]};

      position: relative;

      //border: 1px solid red;

      svg {
        color: ${(props) => props.theme["yellow-600"]};
      }

      span {
      width: 2rem;
      height: 2rem;
      clip-path: circle();
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -0.8rem;
      right: -7rem;
      background: ${(props) => props.theme["yellow-600"]};
      color: ${(props) => props.theme["white"]};
      font-weight: 700;
      font-size: 1.2rem;
    }
    }
  }
`;
