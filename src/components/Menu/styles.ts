import styled, { keyframes } from "styled-components";
import { ImSpinner9 } from "react-icons/im";

export const Menu = styled.aside`
  background: #202020;
  width: 300px;
  float: right;
  padding: 32px 24px;

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
export const Results = styled.div`
  margin-top: 64px;
`;

export const Score = styled.p`
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
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

export const Button = styled.button`
  margin-top: 64px;
  background-color: #dc3545;
  border: none;
  border-radius: 8px;
  width: 100%;
  padding: 16px 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 600;
  font-size: 24px;
  color: white;

  transition: 300ms;

  &:hover {
    cursor: pointer;
    filter: brightness(1.25);
  }

  &:disabled {
    filter: brightness(0.25);
    cursor: not-allowed;
  }
`;

export const SocialSection = styled.section`
  margin-top: 48px;
`;

export const SocialLinks = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;
