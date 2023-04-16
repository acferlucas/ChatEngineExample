import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";
import "./style/App.css";

export type User = {
  id: number,
  is_authenticated: boolean,
  last_message: {
    text: string,
    created: string,
    attachments: string[]
  },
  username: string,
  secret: string,
  email: string,
  first_name: string,
  last_name: string,
  avatar: null,
  custom_json: string,
  is_online: boolean,
  created: string
}

function App() {

  const [user, setUser] = useState<User | undefined>(undefined);

  console.log(user)

  if (!user) {
    return <AuthPage onAuth={(user: User) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;