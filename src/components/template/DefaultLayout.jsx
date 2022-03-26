import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
    const { children } = props;
    // templateは情報を持たないのでコンテンツはchildrenでまとめて受け取る
    return (
        <>
        <Header />
        { children }
        <Footer />
        </>
    );
};