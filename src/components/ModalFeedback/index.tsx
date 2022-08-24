import { useContext } from "react";
import Modal from "react-modal";
import Confetti from "react-confetti";

import { gameSounds } from "../../utils";
import { GameContext } from "../../contexts/GameContext";
import { useGameLogic } from "../../hooks/useGameLogic";

import { ModalTemplateBestScore } from "../ModalTemplateBestScore";
import { ModalTemplateFail } from "../ModalTemplateFail";

import * as S from "./styles";

Modal.setAppElement("#root");

const models = {
  default: <ModalTemplateFail />,
  bestScore: <ModalTemplateBestScore />,
};

export const ModalFeedback = () => {
  const { displayModal } = useContext(GameContext);
  const { handleCloseModal } = useGameLogic();

  const handleOnAfterOpen = () => {
    const { boo, applause } = gameSounds;
    const { model } = displayModal;

    const sound = model === "default" ? boo : applause;

    sound.play();
  };

  return (
    <>
      <Modal
        isOpen={displayModal.isOpen}
        onAfterOpen={handleOnAfterOpen}
        onRequestClose={handleCloseModal}
        style={S.customModalStyles}
      >
        {models[displayModal.model]}
        {displayModal.model === "bestScore" && (
          <Confetti width={500} height={500} />
        )}
      </Modal>
    </>
  );
};
