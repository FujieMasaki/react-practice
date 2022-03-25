import styled from "styled-components";

export const Input = (props) => {
    const { placeholder = "" } = props;
    return <SInput type="text" placeholder={placeholder}/>
    // 親コンポーネントからplaceholderを受け取る。初期値は空
}

const SInput = styled.input`
padding: 8px 16px;
border: solid #ddd 1px;
border-radius: 9999px;
outline: none;
`