import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import socketIOClient from "socket.io-client";
import { UserList } from "../user/UserList";
import { selectUser, useToken } from "../user/userSlice";
import { createMessage, join, leave, myComptoir } from "./ComptoirAPI";
import { MessageForm } from "./message/MessageForm";
import { MessageList } from "./message/MessageList";
import { transform } from "./message/MessageService";
const api = process.env.REACT_APP_API_URL;

export function Comptoir() {
  const [comptoir, setComptoir] = useState();
  const [pilliers, setPilliers] = useState([]);
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const { me } = useSelector(selectUser);
  let { id } = useParams();
  const token = useToken();

  useEffect(() => {
    const innerSocket = socketIOClient(api, { withCredentials: true });
    setSocket(innerSocket);
    return () => {
      innerSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    join(token, id).then((data) => {
      setComptoir(data);
      setPilliers(data.pilliers);
      setMessages(transform(data.messages));
    });
    return async () => {
      await leave();
    };
  }, [token, id]);

  useEffect(() => {
    console.log("join");
    comptoir && socket && socket.emit("join", { me, comptoir });
  }, [comptoir, me, socket]);

  useEffect(() => {
    token &&
      socket &&
      socket.on("update", () => {
        myComptoir(token).then((data) => {
          setPilliers(data.pilliers);
          setMessages(transform(data.messages));
        });
      });
  }, [socket, token]);

  const newMessageHandler = (content) => {
    setSubmitting(true);
    createMessage(token, { content }).then(() => {
      socket.emit("new-message");
      setSubmitting(false);
    });
  };

  return (
    <div>
      Comptoir {comptoir && comptoir.nom}
      <Row>
        <Col span={6}><UserList users={pilliers} /></Col>
        <Col span={12}>
          <MessageList messages={messages}></MessageList>
          <MessageForm
            submitting={submitting}
            onNewMessage={newMessageHandler}
          ></MessageForm>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}
