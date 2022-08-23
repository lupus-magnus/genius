import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SocialMediaBox } from "../SocialMediaBox";
import * as S from "./styles";
export const SocialLinks = () => {
  return (
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
  );
};
