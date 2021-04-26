import { Avatar, Comment, List } from "antd";
import { UserAvatar } from "../../user/UserList";

export function MessageList({ messages }) {
  return (
    <List
      dataSource={messages}
      itemLayout="horizontal"
      renderItem={({USER, content, updatedAt}) =>     <Comment
        author={<a>{USER.login}</a>}
        datetime={new Date(updatedAt).toLocaleString()}
        avatar={<UserAvatar user={USER} />}
        content={<p>{content}</p>}
      ></Comment>}
    />
  );
}
