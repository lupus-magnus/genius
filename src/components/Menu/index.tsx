import { useContext } from "react";
import { TbPlayerPlay } from "react-icons/tb";
import { GameContext } from "../../contexts/GameContext";
import * as S from "./styles";

export const Menu = () => {
  const { isGameReady, setIsGameReady, score, isPlayersTurn } =
    useContext(GameContext);
  return (
    <S.Menu>
      <S.Header>
        {!isGameReady
          ? "Ready?"
          : isPlayersTurn
          ? "It's your move..."
          : "Watch carefully"}
      </S.Header>
      <S.Icon>
        {isGameReady ? (
          <S.Spinner color={isPlayersTurn ? "#c77225" : "white"} />
        ) : (
          <TbPlayerPlay onClick={() => setIsGameReady(true)} />
        )}
      </S.Icon>
      <S.Score>Score: {score}</S.Score>
    </S.Menu>
  );
};
