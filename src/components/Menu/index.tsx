import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbPlayerPlay } from "react-icons/tb";
import { AiOutlineFlag } from "react-icons/ai";

import { GameContext } from "../../contexts/GameContext";
import { useGameLogic } from "../../hooks/useGameLogic";

import * as S from "./styles";
import { SocialMediaBox } from "../SocialMediaBox";

export const Menu = () => {
  const { isGameReady, setIsGameReady, score, isPlayersTurn, handleLoseGame } =
    useContext(GameContext);
  const { gameSounds } = useGameLogic();

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
        <S.Score>Best: 0</S.Score>
      </S.Results>
      <S.Button disabled={!isGameReady} onClick={handleLoseGame}>
        <AiOutlineFlag /> Give up
      </S.Button>

      <S.SocialSection>
        <S.Header>Keep in touch!</S.Header>
        <S.SocialLinks>
          <SocialMediaBox
            link="https://www.linkedin.com/in/lupus-magnus/"
            icon={<BsLinkedin />}
          />
          <SocialMediaBox
            link="https://github.com/lupus-magnus"
            icon={<BsGithub />}
          />
        </S.SocialLinks>
      </S.SocialSection>
    </S.Menu>
  );
};
