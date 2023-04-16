import { PrettyChatWindow } from "react-chat-engine-pretty";
import { User } from "../App";

type ChatsPageProps = {
  user: User
}

export default function ChatsPage({ user }: ChatsPageProps): JSX.Element {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={user.username}
        secret={user.secret}
      />
    </div>
  )
};