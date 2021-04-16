import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "./messageAPI";
import { selectMessage } from "./messageSlice";

export function MessageList() {
  const messages = useSelector(selectMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll);
  }, [dispatch]);

  return (
    <div>
      {messages.map((message) => (
        <span>{message.description}</span>
      ))}
    </div>
  );
}
