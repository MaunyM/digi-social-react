import { Button, Card, Col, Input, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { inscriptionAsync, loginAsync } from "./userSlice";

export function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, [dispatch]);

  const connexionHandler = () => {
    dispatch(loginAsync({ login, password })).then(({error}) => error && setMessage('Problème lors de la connexion'));
  };


  const inscriptionHandler = () => {
    dispatch(inscriptionAsync({ login, password })).then(({error}) => error && setMessage("Problème lors de l'inscription"));
  };

  return (
    <Row>
      <Col span={9}></Col>
      <Col span={6}>
        <Space align="center" wrap>
          <Card className="Login">
            <Input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mot de passe"
            />
            {message}
            <Space>
              <Button type="primary" onClick={connexionHandler}>
                Connexion
              </Button>
              <Button onClick={inscriptionHandler}>S'inscrire</Button>
            </Space>
          </Card>
        </Space>
      </Col>
      <Col span={9}></Col>
    </Row>
  );
}
