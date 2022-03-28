import styled from "styled-components";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
    // 10のデータを配列で回す。i
  return {
    id: val,
    name: `masaki${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaaaa@com",
    phone: "000000000",
    company: {
      name: "テスト株式会社",
    },
    website: "https",
  };
});

export const Users = () => {
  // バケツリレーにならなくて済むので、isAdminは削除
  // 管理者か確認

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>

      <SearchInput />
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
          // UserCardに管理者かどうかの値を渡す
          // バケツリレーにならなくて済むので、isAdminは削除
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
