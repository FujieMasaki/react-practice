import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page1Layout } from "../Page1Layout";
import { Page2 } from "../Page2";

export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1Layout />}>
        {/* ネスト用のコンポーネントを作成 */}
         <Route index element={<Page1 />} />
         {/* ネストされる親側のコンポーネント */}
         <Route path="detailA" element={<Page1DetailA />} />
         {/* ネストする子コンポーネント */}
         <Route path="detailB" element={<Page1DetailB />} />
         {/* ネストする子コンポーネント */}
        </Route>
       <Route path="/page2" element={<Page2 />} />
      </Routes>
    );
}