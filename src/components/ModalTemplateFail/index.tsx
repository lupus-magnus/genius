import { useGameLogic } from "../../hooks/useGameLogic";
import * as S from "./styles";

export const ModalTemplateFail = () => {
  const { handleCloseModal } = useGameLogic();
  return (
    <S.Container>
      <S.Title>You loose!</S.Title>
      <S.Illustration src="/assets/sad.svg" alt="sad face" />
      <S.Options>
        <S.OptionButton onClick={handleCloseModal}>Try again</S.OptionButton>
      </S.Options>
    </S.Container>
  );
};
