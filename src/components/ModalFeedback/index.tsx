import { useContext } from "react";
import Modal from "react-modal";

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
  const { displayModal, handleCloseModal } = useContext(GameContext);
  const { gameSounds } = useGameLogic();

  const handleOnAfterOpen = () => {
    const { boo, applause } = gameSounds;
    const { model } = displayModal;
    const sound = model === "default" ? boo : applause;
    sound.play();
  };

  return (
    <Modal
      isOpen={displayModal.isOpen}
      onAfterOpen={handleOnAfterOpen}
      onRequestClose={handleCloseModal}
      style={S.customModalStyles}
    >
      {models[displayModal.model]}
    </Modal>
  );
};
