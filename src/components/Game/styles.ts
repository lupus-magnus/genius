import { ImSpinner9 } from "react-icons/im";
import styled, { keyframes } from "styled-components";

export const Game = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    justify-content: flex-start;
    gap: 32px;
  }
`;

export const Header = styled.h1`
  margin-top: 16px;
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const MobileMenu = styled.div`
  @media (min-width: 861px) {
    display: none;
  }
`;

export const Icon = styled.span`
  font-size: 48px;
  color: #c77225;
  text-align: center;
  margin-top: 40px;
  transition: 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const spin = keyframes`
  from{
    transform-origin: center;
    transform: rotate(0);
  } to{
    transform-origin: center;
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(ImSpinner9)`
  transform-origin: center;
  animation: ${spin} 1200ms linear infinite;
`;
