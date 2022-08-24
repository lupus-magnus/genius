import { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";
import { useGameLogic } from "../../hooks/useGameLogic";

import * as S from "./styles";

export const ModalTemplateBestScore = () => {
  const { bestScore } = useContext(GameContext);
  const { handleCloseModal } = useGameLogic();

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
