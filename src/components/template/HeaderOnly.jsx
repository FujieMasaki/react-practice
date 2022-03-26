import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
    const { children } = props;
    // templateは情報を持たないのでコンテンツはchildrenでまとめて受け取る
    return (
        <>
        <Header />
        { children }
        </>
    );
};