import { useContext } from "react";
import Modal from "react-modal";
import { GameContext } from "../../contexts/GameContext";
import { useGameLogic } from "../../hooks/useGameLogic";

import * as S from "./styles";

Modal.setAppElement("#root");

export const ModalFeedback = () => {
  const { displayModal, handleCloseModal } = useContext(GameContext);
  const { gameSounds } = useGameLogic();

  return (
    <Modal
      isOpen={displayModal}
      onAfterOpen={() => gameSounds.boo.play()}
      onRequestClose={handleCloseModal}
      style={S.customModalStyles}
    >
      <S.Container>
        <S.Title>You loose!</S.Title>
        <S.Illustration src="/assets/sad.svg" alt="sad face" />
        <S.Options>
          <S.OptionButton onClick={handleCloseModal}>Try again</S.OptionButton>
        </S.Options>
      </S.Container>
    </Modal>
  );
};
