import { FormEvent, useState } from "react";

type AuthPageProps = {
  onAuth: ({ username, secret }: { username: string, secret: string }) => void;
}

export default function AuthPage(props: AuthPageProps) {
  const [username, setUsername] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (username) {
      props.onAuth({ username: username, secret: username });
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
