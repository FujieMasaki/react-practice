import { useContext } from "react";
// Contextを使用
import styled from "styled-components";
import { UserContext } from "../../../provider/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  // バケツリレーにならなくて済むので、isAdminは削除
  const { userInfo } = useContext(UserContext);
  // グローバルなstateを呼び出すために、userInfoを呼び出す
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  // userInfoが存在していればuserInfo.isAdminのまま、なければfalse
  const context = useContext(UserContext);
  // useContextでUserContextを呼び出す。
  console.log(context)
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt="{name}" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
      {/* 管理者かどうか判定 */}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`