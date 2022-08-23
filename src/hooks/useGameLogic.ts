export const useGameLogic = () => {
  const buttons = [
    {
      id: 1,
      color: "#C77225",
      sound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    },
    {
      id: 2,

      color: "#7D8CC4",
      sound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    },
    {
      id: 3,

      color: "#2D936C",
      sound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    },
    {
      id: 4,

      color: "#391463",
      sound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    },
  ];

  const gameSounds = {
    start: new Audio(
      "https://cdn.freesound.org/previews/75/75235_778044-lq.mp3"
    ),
    fail: new Audio(
      "https://cdn.freesound.org/previews/476/476177_6101353-lq.mp3"
    ),
    boo: new Audio(
      "https://cdn.freesound.org/previews/619/619031_781461-lq.mp3"
    ),
  };

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
