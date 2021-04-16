import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync, selectMessage } from "./messageSlice";

export function MessageList() {
  const messages = useSelector(selectMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return (
    <div>
      {messages.map((message) => (
        <span>{message.content}</span>
      ))}
    </div>
  );
}
