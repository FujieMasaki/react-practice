import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
    return (
        <div>
            <h1>Page1ページです</h1>
            <Link to='/page1/detailA'>PageDetailAページです</Link>
            <br/>
            <Link to='/page1/detailB'>PageDetailBページです</Link>
            <Outlet />
        </div>
    );
};