import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;

  //border: 1px solid red;

  nav {
    display: flex;
    gap: 12px;

    span {
      min-width: 143px;
      height: 38px;
      padding: 8px;
      font-size: 1.4rem;
      border-radius: 6px;

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
      width: 38px;
      height: 38px;
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
