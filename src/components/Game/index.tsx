import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import * as S from "./styles";

export const Game = () => {
  const { buttons, activeButton, handleClickButton } = useContext(GameContext);
  return (
    <S.Game>
      <S.Board>
        {buttons.map((button) => (
          <S.BoardButton
            key={button.id}
            active={button.id === activeButton}
            onClick={() => {
              handleClickButton(button.id);
            }}
            color={button.color}
          />
        ))}
      </S.Board>
      <S.BoardCenter>
        <S.Image src="/logo.png" alt="logo" />
      </S.BoardCenter>
    </S.Game>
  );
};
