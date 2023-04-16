import { FormEvent, useState } from "react";
import { User } from "../App";
import { api } from '../server/axios'

type AuthPageProps = {
  onAuth: (user: User) => void;
}

export default function AuthPage(props: AuthPageProps): JSX.Element {
  const [username, setUsername] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const { data } = await api.post('/users', {
        username,
      })

      props.onAuth(data)
    } catch (err: any) {
      console.log(err)
    }

  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};
