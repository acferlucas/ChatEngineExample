import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./ChatsPage";
import "./App.css";

type User = {
  username: string,
  secret: string
}

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  if (!user) {
    return <AuthPage onAuth={(user: User) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;