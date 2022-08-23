// import styled from "@emotion/styled";
// import { motion } from "framer-motion";

import styled from "styled-components";

export const Box = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: rgba(51, 51, 51, 0.25);
  box-shadow: 0px 0px 2px 2px rgba(221, 221, 221, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 300ms;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
