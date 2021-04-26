import { Button, Card, Col, Form, Input, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { inscriptionAsync } from "./userSlice";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export function Signup() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  useEffect(() => {}, [dispatch]);

  const onFinish = ({ login, password }) => {
    dispatch(inscriptionAsync({ login, password })).then(
      ({ error }) => error && setMessage("Problème lors de l'inscription")
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
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir un mot de passe",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Mot de passe"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Veuillez confirmer votre mot de passe",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "Les deux mots de passes doivent correspondre!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirmation"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              {message}
              <Space>
                <Button type="primary" htmlType="submit">
                  S'inscrire
                </Button>
                <Button></Button>
              </Space>
            </Form>
          </Card>
        </Space>
      </Col>
      <Col span={9}></Col>
    </Row>
  );
}
