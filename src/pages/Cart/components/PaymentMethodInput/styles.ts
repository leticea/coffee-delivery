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
  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-700"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme["purple-600"]};
  }

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }

  user-select: none;
`;
