import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
            {/* Linkを使用する際は親要素にBrowseRouterが必要。今回はApp.jsに記載 */}
        </SHeader>
    )
}

const SHeader = styled.header`
background-color: #11999e;
color: #fff;
text-align: center;
padding: 8px 0;
`

const SLink = styled(Link)`
/* 既存のコンポーネントの記載方法 */
margin: 0 8px;
`
