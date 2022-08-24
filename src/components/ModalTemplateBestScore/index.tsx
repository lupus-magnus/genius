import { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";

import * as S from "./styles";

export const ModalTemplateBestScore = () => {
  const { handleCloseModal, bestScore } = useContext(GameContext);
  return (
    <S.Container>
      <S.Title>New best score!</S.Title>

      <S.Illustration src="/assets/best_score.svg" alt="sad face" />
      <S.Results>
        <S.BestScore>{bestScore}</S.BestScore>
        <S.Highlight>Rounds!</S.Highlight>
      </S.Results>
      <S.Options>
        <S.OptionButton onClick={handleCloseModal}>Try again</S.OptionButton>
      </S.Options>
    </S.Container>
  );
};
