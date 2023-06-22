import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme["purple-100"]};
      border-color: ${props.theme["purple-600"]};

      &:hover {
        background: ${props.theme["purple-100"]};
      }
    `}
  }
`;

export const Content = styled.div`
  padding: 0 1rem;
  margin: 3.2rem 0;
  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-700"]};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  height: 5rem;
  width: 17rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  transition: 0.3s;
  user-select: none;

  //border: 1px solid red;

  svg {
    color: ${(props) => props.theme["purple-600"]};
  }

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }
`;
