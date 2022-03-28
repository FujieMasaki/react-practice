import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/cards/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
    const { user } = props;
    // Usersから渡されたisAdmin
    // バケツリレーにならなくて済むので、isAdminは削除
  return (
    <Card>
       <UserIconWithName image={user.image} name={user.name} />
       {/* UserIconWithNameへ渡す */}
       {/* バケツリレーにならなくて済むので、isAdminは削除 */}
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
text-align: left;
dt {
    float: left;
}
dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
    /* 枠からはみ出さない */
}
}
`;
