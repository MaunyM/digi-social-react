import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

export function Home() {
    const {me} = useSelector(selectUser);
    return <div>Bienvenu {me.login}</div>
}