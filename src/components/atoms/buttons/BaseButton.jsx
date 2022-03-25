import styled from "styled-components";

export const BaseButton = styled.button`
/* 共通するstyleを宣言 */
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
