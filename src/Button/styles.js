import styled from "styled-components";

export const DefaultButton = styled.button`
  border-radius: 5px;
  background-color: ${({ variant, theme }) =>
    variant === "outlined" ? "#F2F2F2" : theme.palette.primary.main};
  color: ${({ variant, theme }) =>
    variant === "outlined" ? theme.palette.primary.main : "white"};
  border: ${({ variant, theme }) =>
    variant === "outlined" ? `2px solid ${theme.palette.primary.main}` : 0};
  padding: 6px 24px;
  margin: 0 20px;
  font-weight: 600;
  font-size: 2rem;

  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
`;
