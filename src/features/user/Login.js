import { Button, Card, Col, Form, Input, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { loginAsync } from "./userSlice";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function Login() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  useEffect(() => {}, [dispatch]);

  const onFinish = ({ login, password }) => {
    dispatch(loginAsync({ login, password })).then(
      ({ error }) => error && setMessage(error)
    );
  };

  return (
    <Row>
      <Col span={9}></Col>
      <Col span={6}>
        <Space align="center" wrap>
          <Card className="Login">
            <Form onFinish={onFinish}>
              <Form.Item
                name="login"
                rules={[{ required: true, message: "Veuillez saisir un nom" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nom"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir un mot de passe",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {message}
              <Space>
                <Button type="primary" htmlType="submit">
                  Connexion
                </Button>
                <Link to="/signup">
                  <Button>S'inscrire</Button>
                </Link>
              </Space>
            </Form>
          </Card>
        </Space>
      </Col>
      <Col span={9}></Col>
    </Row>
  );
}
