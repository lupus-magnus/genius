import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 22px;
`;

export const Results = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #c77225;
`;

export const Highlight = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 64px;
  color: white;
`;

export const BestScore = styled.p`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 128px;

  white-space: nowrap;
`;

export const Illustration = styled.img`
  width: 250px;
  max-width: 100%;
  height: auto;
  align-self: center;

  opacity: 0.25;
  filter: blur(2px);
`;

export const Options = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 24px;
`;

export const OptionButton = styled.button<{ secondary?: boolean }>`
  border: none;
  border-radius: 8px;
  padding: 16px 8px;
  background-color: ${({ secondary }) =>
    secondary ? "rgba(255, 255, 255, 0.1)" : "#c77225"};

  font-weight: 600;
  font-size: 16px;
  color: white;

  transition: 300ms;

  &:hover {
    cursor: pointer;
    filter: brightness(1.25);
  }
`;
