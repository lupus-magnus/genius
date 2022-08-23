import React, { ReactElement } from "react";
import * as S from "./styles";

type Props = {
  icon?: ReactElement;
  link: string;
};

export const SocialMediaBox: React.FC<Props> = ({ icon, link }) => {
  const CustomIcon: React.FC = () =>
    icon ? React.cloneElement(icon, { size: 32, color: "gray" }) : null;

  return (
    <S.Box href={link} target="_blank">
      <CustomIcon />
    </S.Box>
  );
};
