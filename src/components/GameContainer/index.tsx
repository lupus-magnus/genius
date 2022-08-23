import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { ModalFeedback } from "../ModalFeedback";

import * as S from "./styles";

type Props = {
  children?: React.ReactNode;
};

export const GameContainer = ({ children }: Props) => {
  return (
    <>
      <ModalFeedback />
      <S.Container>{children}</S.Container>
    </>
  );
};
