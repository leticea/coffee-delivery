import styled from "styled-components";

export const QuantityButtons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.2rem;
  height: 3.2rem;
  border-radius: 6px;
  gap: 4px;

  font-size: 1.6rem;
  color: ${(props) => props.theme["gray-900"]};
  background-color: ${(props) => props.theme["gray-400"]};

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["purple-600"]};

    &:hover {
      color: ${(props) => props.theme["purple-800"]};
    }
  }
`;