import "./styles.scss";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
//ネスト用のコンポーネントを作成
export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>test</SecondaryButton>
      <br />
      <SearchInput>検索</SearchInput>
    </div>
  );
}
