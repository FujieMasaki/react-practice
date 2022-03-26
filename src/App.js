import "./styles.css";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";


const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "aaaaa@com",
  phone: "000000000",
  company: {
    name:"テスト株式会社"
    },
  website: "https"
}
// user情報を定義

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>test</SecondaryButton>
      <br />
      <SearchInput>検索</SearchInput>
      <UserCard user={user}/>

      {/* propsを持たせる */}
    </div>
  );
}
