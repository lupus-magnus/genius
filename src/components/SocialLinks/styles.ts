import styled from "styled-components";

export const Header = styled.span`
  color: white;

  font-weight: 700;
  font-size: 20px;
`;

export const SocialSection = styled.section<{ mobile?: boolean }>`
  margin-top: 48px;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 861px) {
    display: ${({ mobile }) => (mobile ? "none" : "static")};
  }
`;

export const SocialLinks = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;
