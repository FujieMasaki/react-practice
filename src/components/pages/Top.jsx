import { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
// 現在のコンポーネントから別のページに遷移する


export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);
    // 更新していくので、setUserInfoを取り出す

    const onClickAdmin = () =>
    setUserInfo({ isAdmin: true });
    // set関数を呼び出す
    navigate("/users");
    // ボタンが押されたらuserspageに遷移したい
    const onClickGeneral = () =>
    setUserInfo({ isAdmin: false });
    navigate("/users");

    return(
        <SContainer>
            <h2>TOPページ</h2>
            <SecondaryButton onClick={onClickAdmin}>管理ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
text-align: center;
`