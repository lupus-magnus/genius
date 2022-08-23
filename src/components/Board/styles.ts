import styled from "styled-components";

export const BoardContainer = styled.div`
  position: relative;

  width: 500px;
  height: 500px;

  @media (max-width: 860px) {
    width: 300px;
    height: 300px;
  }
`;

export const CountdownContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Board = styled.div`
  background-color: #202020;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  padding: 64px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 150px;
  grid-auto-columns: 150px;
  gap: 64px;

  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 5px solid #c77225;

  @media (max-width: 860px) {
    width: 300px;
    height: 300px;
    padding: 40px;
    gap: 24px;
  }
`;

export const BoardButton = styled.button<{ color: string; active: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 64px;
  background: ${({ color }) => color};
  border: none;
  transition: 600ms;

  filter: ${({ active }) => `brightness(${active ? "3" : "1"})`};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 860px) {
    border-radius: 32px;
  }
`;

export const BoardCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #202020;

  width: 250px;
  height: 250px;
  border-radius: 50%;

  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    width: 150px;
    height: 150px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;
