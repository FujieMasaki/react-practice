import { BrowserRouter, Link } from "react-router-dom";
// Linkはhtmlのaタグのようなもの
// SwitchはV.6から必要無くなった
// RouteはSwitchの中でルートがマッチしたものを表示する
import "./styles.scss";

import { Router } from "./router/Router";


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
    <Router/>
    </BrowserRouter>
  );
}