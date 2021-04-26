import { Button, Comment, Form, Input } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserAvatar } from "../../user/UserList";
import { selectUser } from "../../user/userSlice";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Rajouter un truc
      </Button>
    </Form.Item>
  </>
);

export function MessageForm({ submitting, onNewMessage }) {
  const { me } = useSelector(selectUser);
  const [newMessage, setNewMessage] = useState();

  const submitHandler = () => {
    setNewMessage();
    onNewMessage(newMessage);
  };

  return (
    <Comment
      avatar={<UserAvatar user={me} />}
      content={
        <Editor
          onChange={(e) => setNewMessage(e.target.value)}
          onSubmit={submitHandler}
          submitting={submitting}
          value={newMessage}
        />
      }
    />
  );
}
