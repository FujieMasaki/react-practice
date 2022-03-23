import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
