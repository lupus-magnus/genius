import { Board } from "../Board";
import { GameControls } from "../GameControls";
import { SocialLinks } from "../SocialLinks";

import * as S from "./styles";

export const Game = () => {
  return (
    <S.Game>
      <GameControls mobile />
      <Board />
      <SocialLinks />
    </S.Game>
  );
};
