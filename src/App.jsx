import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const user = {
    fullName: "John Dou",
    userName: "@johndou",
    tweets: 1337,
    following: 561,
    followers: 718,
    gender: "male",
  };

  return <UserCard user={user} />;
}

export default App;
