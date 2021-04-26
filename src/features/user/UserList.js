import { Avatar } from "antd";

export function UserList({ users }) {
  return (
    <div className="UserList">
      {users.map((user) => (
        <UserAvatar key={user.login} user={user} />
      ))}
    </div>
  );
}

export function UserAvatar({ user }) {
  return (
    <Avatar key={user.login} style={{ backgroundColor: user.color }}>
      {user.login}
    </Avatar>
  );
}
