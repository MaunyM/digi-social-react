import { useSelector } from "react-redux";
import { ComptoirForm } from "../features/comptoir/ComptoirFrom";
import { ComptoirList } from "../features/comptoir/ComptoirList";
import { UserList } from "../features/user/UserList";
import { selectUser } from "../features/user/userSlice";

export function Home() {
  const { me, friend } = useSelector(selectUser);
  return (
    <div>
      Bienvenu {me.login}
      <UserList users={friend}></UserList>
      <ComptoirList></ComptoirList>
      <ComptoirForm></ComptoirForm>
    </div>
  );
}
