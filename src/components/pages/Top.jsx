import styled from "styled-components";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
// 現在のコンポーネントから別のページに遷移する


export const Top = () => {
    const navigate = useNavigate();

    const onClickAdmin = () => navigate("/users", {state: {isAdmin:true}});
    // ボタンが押されたらuserspageに遷移したい
    const onClickGeneral = () => navigate("/users", {state:{isAdmin:false}});

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