import React, { useEffect, useState } from "react";
import { useGameLogic } from "../hooks/useGameLogic";
import { areArraysEqual, wait } from "../utils";

type GameContextProps = {
  buttons: {
    id: number;
    color: string;
    sound: HTMLAudioElement;
  }[];
  activeButton: null | 1 | 2 | 3 | 4;

  handleClickButton: (buttonId: number) => void;
  isPlayersTurn: boolean;
  isGameReady: boolean;
  setIsGameReady: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  handleLoseGame: () => void;
};

export const GameContext = React.createContext({} as GameContextProps);

type Props = {
  children?: React.ReactNode;
};

export const GameProvider = ({ children }: Props) => {
  const { buttons, increaseRandomSequence } = useGameLogic();

  const [isGameReady, setIsGameReady] = useState(false);
  const [currentSequence, setCurrentSequence] = useState<null | number[]>(null);
  const [activeButton, setActiveButton] = useState<null | 1 | 2 | 3 | 4>(null);

  const [score, setScore] = useState(0);
  const [isPlayersTurn, setIsPlayersTurn] = useState(false);
  const [playersAnswer, setPlayersAnswer] = useState([] as number[]);

  const handleClickButton = (buttonId: number) => {
    if (isPlayersTurn) {
      setActiveButton(buttonId as 1 | 2 | 3 | 4);
      setPlayersAnswer([...playersAnswer, buttonId]);
    }
  };

  const handleLoseGame = () => {
    setScore(0);
    setIsPlayersTurn(false);
    setPlayersAnswer([]);
    setCurrentSequence([]);
    setIsGameReady(false);
    console.log("You lose...");
  };

  const handleCheckAnswer = () => {
    if (areArraysEqual(playersAnswer, currentSequence as number[])) {
      setScore((prev) => prev + 1);
      console.log("Boa! Próximo nível...");
    } else {
      handleLoseGame();
    }
    setPlayersAnswer([]);
  };

  // Whenever the score changes, display a new sequence and wait for the user's answer
  useEffect(() => {
    if (isGameReady) {
      const newSequence = increaseRandomSequence(currentSequence ?? []);
      setCurrentSequence(newSequence);

      (async function displaySequence() {
        setIsPlayersTurn(false);
        await wait(1000).then(async () => {
          for (const buttonId of newSequence) {
            await wait(800);
            setActiveButton(buttonId as 1 | 2 | 3 | 4);
          }
        });
      })().then(async () => {
        await wait(1000);
        console.log(newSequence);
        setIsPlayersTurn(true);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameReady, score]);

  // Runs animations for each active button
  useEffect(() => {
    if (activeButton) {
      buttons.find((button) => button.id === activeButton)!.sound.play();
      setTimeout(() => setActiveButton(null), 600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButton]);

  // Checks user answer when answer length matches current sequence.
  useEffect(() => {
    if (isGameReady) {
      if (playersAnswer.length === currentSequence?.length) {
        console.log({ playersAnswer, currentSequence });
        handleCheckAnswer();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersAnswer, currentSequence]);

  return (
    <GameContext.Provider
      value={{
        buttons,
        activeButton,
        handleClickButton,
        isPlayersTurn,
        isGameReady,
        setIsGameReady,
        score,
        handleLoseGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
