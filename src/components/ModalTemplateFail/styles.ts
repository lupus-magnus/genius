import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 22px;
`;

export const Illustration = styled.img`
  width: 250px;
  max-width: 100%;
  height: auto;
  align-self: center;
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
