import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick} = props;
  // onClickを受け取る
  return <SButton onClick={onClick}>{children}</SButton>;
  // 受け取ったonClickをそのまま割り当てる
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
