import { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

export const useGameLogic = () => {
  const Game = useContext(GameContext);

  const handleClickBoardButton = (buttonId: number) => {
    if (Game.isPlayersTurn) {
      Game.setActiveButton(buttonId as 1 | 2 | 3 | 4);
      Game.setPlayersAnswer([...Game.playersAnswer, buttonId]);
    }
  };

  const handleCloseModal = () =>
    Game.setDisplayModal({ ...Game.displayModal, isOpen: false });

  return {
    handleClickBoardButton,
    handleCloseModal,
    handleLoseGame: Game.handleLoseGame,
  };
};
