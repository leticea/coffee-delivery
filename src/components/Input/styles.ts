import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${(props) => props.theme["base-error"]};
  }
`;

interface InputContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  background: ${(props) => props.theme["gray-300"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme["yellow-600"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme["base-error"]};
    `}
`;

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme["gray-700"]};

  &::placeholder {
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme["gray-600"]};
`;
