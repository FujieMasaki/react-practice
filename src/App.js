import axios from "axios";
import "./styles.css";

const onClickUsers = () =>{
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    // jsondataを取得して、.thenでアクションを記載
  })
  .catch((err) => console.log(err))
  // エラーをキャッチする
};

const onClickUser1 = () =>{
  axios
  .get("https://jsonplaceholder.typicode.com/users?id=1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err))
};


export default function App() {
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1</button>
    </div>
  );
}
