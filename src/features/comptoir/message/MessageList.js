import { Comment } from "antd";
import { useEffect, useRef } from "react";
import { UserAvatar } from "../../user/UserList";
import "./MessageList.css";

export function MessageList({ messages }) {
  const endEl = useRef(null);

  useEffect(() => {
    endEl.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="MessageList">
      {messages.map(({ USER, content, updatedAt, id }) => (
        <Comment
          key={id}
          author={<span>{USER.login}</span>}
          datetime={new Date(updatedAt).toLocaleString()}
          avatar={<UserAvatar user={USER} />}
          content={<p>{content}</p>}
        ></Comment>
      ))}
      <div style={{ float: "left", clear: "both" }} ref={endEl}></div>
    </div>
  );
}
