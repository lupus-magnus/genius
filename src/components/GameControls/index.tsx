import { useContext } from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { TbPlayerPlay } from "react-icons/tb";

import { gameSounds } from "../../utils";
import { GameContext } from "../../contexts/GameContext";

import * as S from "./styles";

type Props = {
  mobile?: boolean;
};

export const GameControls = ({ mobile }: Props) => {
  const {
    isGameReady,
    setIsGameReady,
    score,
    bestScore,
    isPlayersTurn,
    handleLoseGame,
  } = useContext(GameContext);

  return (
    <S.Container mobile={mobile}>
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
          <TbPlayerPlay
            onClick={() => {
              gameSounds.start.play();
              setIsGameReady(true);
            }}
          />
        )}
      </S.Icon>
      <S.Results>
        <S.Score>Score: {score}</S.Score>
        <S.Score>Best: {bestScore}</S.Score>
      </S.Results>
      <S.Button disabled={!isGameReady} onClick={handleLoseGame}>
        <AiOutlineFlag /> Give up
      </S.Button>
    </S.Container>
  );
};
