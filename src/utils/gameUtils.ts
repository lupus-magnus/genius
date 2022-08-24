const handleChooseRandomButton = () => Math.floor(Math.random() * 4) + 1;

export const increaseRandomSequence = (sequence: number[]): number[] => {
  const newElement = handleChooseRandomButton();
  const newSequence = [...sequence, newElement];
  return newSequence;
};
