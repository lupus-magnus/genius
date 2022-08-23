import { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";

import * as S from "./styles";

export const ModalTemplateBestScore = () => {
  const { handleCloseModal, bestScore } = useContext(GameContext);
  return (
    <S.Container>
      <S.Title>New best score!</S.Title>

      <S.Illustration src="/assets/best_score.svg" alt="sad face" />
      <S.Options>
        <S.BestScore>{bestScore} points!</S.BestScore>
        <S.OptionButton onClick={handleCloseModal}>Try again</S.OptionButton>
      </S.Options>
    </S.Container>
  );
};
