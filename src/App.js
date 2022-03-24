import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// Linkはhtmlのaタグのようなもの
// SwitchはV.6から必要無くなった
// RouteはSwitchの中でルートがマッチしたものを表示する
import {Home} from "./Home";
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import "./styles.scss";

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">page1</Link>
      <br />
      <Link to="/page2">page2</Link>
      <br />
    </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page1" element={<Page1 />} />;
    <Route path="/page2" element={<Page2 />} />
    </Routes>
    </BrowserRouter>
  );
}
