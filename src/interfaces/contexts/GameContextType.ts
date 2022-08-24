export type ModalDTO = {
  isOpen: boolean;
  model: "default" | "bestScore";
};

export type GameContextProps = {
  activeButton: null | 1 | 2 | 3 | 4;
  isPlayersTurn: boolean;
  isGameReady: boolean;
  score: number;
  displayModal: ModalDTO;
  bestScore: string;
  playersAnswer: number[];

  setActiveButton: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4 | null>>;
  setPlayersAnswer: React.Dispatch<React.SetStateAction<number[]>>;
  setBestScore: React.Dispatch<React.SetStateAction<string>>;
  setDisplayModal: React.Dispatch<React.SetStateAction<ModalDTO>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setIsPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSequence: React.Dispatch<React.SetStateAction<number[] | null>>;
  setIsGameReady: React.Dispatch<React.SetStateAction<boolean>>;

  handleLoseGame: () => void;
};
