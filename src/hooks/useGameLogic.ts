import { gameSounds, buttons } from "../utils";

export const useGameLogic = () => {
  const handleChooseRandomButton = () => Math.floor(Math.random() * 4) + 1;

  const handleRandomizeSequence = (length: number) => {
    const sequence = [];
    for (let i = 0; i < length; i++) {
      sequence.push(handleChooseRandomButton());
    }

    console.log("random sequence:", sequence);
    return sequence;
  };

  const increaseRandomSequence = (sequence: number[]): number[] => {
    const newElement = handleChooseRandomButton();
    const newSequence = [...sequence, newElement];
    return newSequence;
  };

  return {
    handleRandomizeSequence,
    buttons,
    increaseRandomSequence,
    gameSounds,
  };
};
