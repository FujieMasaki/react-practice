import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// Linkはhtmlのaタグのようなもの
// SwitchはV.6から必要無くなった
// RouteはSwitchの中でルートがマッチしたものを表示する
import {Home} from "./Home";
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import "./styles.scss";
import { Page1Layout } from "./Page1Layout";
//ネスト用のコンポーネントを作成
export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Home</Link>
      {/* 遷移するURL */}
      <br />
      <Link to="/page1">page1</Link>
      <br />
      <Link to="/page2">page2</Link>
      <br />
    </div>
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
    </BrowserRouter>
  );
}