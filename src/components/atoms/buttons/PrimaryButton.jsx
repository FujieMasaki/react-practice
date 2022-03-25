import styled from "styled-components";
import { BaseButton } from "./BaseButton";
// 共通するstyleをimport


export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
/* 共通するstyleを追加 */
  background-color: #40514e;
  }
`;
