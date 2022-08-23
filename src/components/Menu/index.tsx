import { GameControls } from "../GameControls";
import { SocialLinks } from "../SocialLinks";

import * as S from "./styles";

export const Menu = () => {
  return (
    <S.Menu>
      <GameControls />
      <SocialLinks />
    </S.Menu>
  );
};
