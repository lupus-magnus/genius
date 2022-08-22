import styled, { keyframes } from "styled-components";
import { TbFidgetSpinner } from "react-icons/tb";

export const Menu = styled.aside`
  background: #202020;
  width: 300px;
  float: right;
  padding: 32px 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.span`
  color: white;

  font-weight: 700;
  font-size: 20px;
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

export const Score = styled.p`
  margin-top: 64px;
  color: white;
  font-weight: 600;
  font-size: 18px;
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

export const Spinner = styled(TbFidgetSpinner)`
  transform-origin: center;
  animation: ${spin} 800ms infinite;
`;
