import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { GameContext } from "../../contexts/GameContext";
import * as S from "./styles";

export const Board = () => {
  const {
    buttons,
    activeButton,
    handleClickButton,
    handleLoseGame,
    isGameReady,
    isPlayersTurn,
  } = useContext(GameContext);
  return (
    <S.BoardContainer>
      <S.CountdownContainer>
        <CountdownCircleTimer
          isPlaying={isGameReady && isPlayersTurn}
          duration={5}
          colors={["#c77225", "#dc3545"]}
          colorsTime={[5, 0]}
          onComplete={handleLoseGame}
          strokeWidth={3}
          size={150}
          key={String(isPlayersTurn)}
        />
      </S.CountdownContainer>
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
    </S.BoardContainer>
  );
};
