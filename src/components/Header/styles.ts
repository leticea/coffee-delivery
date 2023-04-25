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
    }

    a {
      width: 3.8rem;
      height: 3.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;

      background-color: ${(props) => props.theme["yellow-100"]};

      svg {
        color: ${(props) => props.theme["yellow-600"]};
      }
    }
  }
`;
