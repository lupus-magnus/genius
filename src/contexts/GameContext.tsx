import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  areArraysEqual,
  wait,
  increaseRandomSequence,
  buttons,
  gameSounds,
} from "../utils";
import { GameContextProps, ModalDTO } from "../interfaces";

export const GameContext = React.createContext({} as GameContextProps);

type Props = {
  children?: React.ReactNode;
};

export const GameProvider = ({ children }: Props) => {
  const [isGameReady, setIsGameReady] = useState(false);
  const [currentSequence, setCurrentSequence] = useState<null | number[]>(null);
  const [activeButton, setActiveButton] = useState<null | 1 | 2 | 3 | 4>(null);
  const [displayModal, setDisplayModal] = useState<ModalDTO>({
    isOpen: false,
    model: "default",
  });

  const [score, setScore] = useState(0);
  const [isPlayersTurn, setIsPlayersTurn] = useState(false);
  const [playersAnswer, setPlayersAnswer] = useState([] as number[]);

  const [bestScore, setBestScore] = useLocalStorage("@lupus_genius_bs", "0");

  const handleCheckAnswer = () => {
    if (
      areArraysEqual(
        playersAnswer,
        currentSequence?.slice(0, playersAnswer.length) as number[]
      )
    ) {
      if (playersAnswer.length === currentSequence?.length) {
        setScore((prev) => prev + 1);
        console.log("Boa! Próximo nível...");
      }
    } else {
      handleLoseGame();
    }
  };

  const handleLoseGame = () => {
    const isNewBestScore = !bestScore || Number(bestScore) < score;
    if (isNewBestScore) {
      setBestScore(String(score));
      console.log("New best score!");
    }

    setDisplayModal({
      model: isNewBestScore ? "bestScore" : "default",
      isOpen: true,
    });

    setScore(0);
    setIsPlayersTurn(false);
    setPlayersAnswer([]);
    setCurrentSequence([]);
    setIsGameReady(false);
    console.log("You lose...");
    gameSounds.fail.play();
  };

  // Whenever the score changes, display a new sequence and wait for the user's answer
  useEffect(() => {
    setPlayersAnswer([]);
    if (isGameReady) {
      const newSequence = increaseRandomSequence(currentSequence ?? []);
      setCurrentSequence(newSequence);

      (async function displaySequence() {
        setIsPlayersTurn(false);
        await wait(1500).then(async () => {
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
      if (playersAnswer.length >= 1) {
        console.log({
          playersAnswer,
          currentSequence,
          currentSequenceSlice: currentSequence?.slice(0, playersAnswer.length),
        });
        handleCheckAnswer();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersAnswer, currentSequence]);

  return (
    <GameContext.Provider
      value={{
        setCurrentSequence,
        setDisplayModal,
        setIsPlayersTurn,
        setScore,
        playersAnswer,

        activeButton,
        bestScore,
        isPlayersTurn,
        isGameReady,
        score,
        displayModal,
        setBestScore,
        setPlayersAnswer,
        setActiveButton,
        setIsGameReady,
        handleLoseGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
