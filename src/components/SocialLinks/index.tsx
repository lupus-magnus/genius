import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SocialMediaBox } from "../SocialMediaBox";
import * as S from "./styles";

type Props = {
  mobile?: boolean;
};

export const SocialLinks = ({ mobile }: Props) => {
  return (
    <S.SocialSection mobile={mobile}>
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
  );
};
