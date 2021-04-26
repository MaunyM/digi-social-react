import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Redirect } from "react-router";
import { useToken } from "../user/userSlice";
import { create } from "./ComptoirAPI";

export function ComptoirForm() {
  const [nom, setNom] = useState("");
  const [comptoir, setComptoir] = useState();
  const token = useToken();

  const onFinish = () => {
    create(token, { nom }).then((data) => setComptoir(data));
  };

  const onFinishFailed = () => {};

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return comptoir ? (
    <Redirect to={`/comptoir/${comptoir.id}`}></Redirect>
  ) : (
    <Form
      {...layout}
      name="basic"
      onFinishFailed={onFinishFailed}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="comptoir"
        rules={[{ required: true, message: "Donnez un nom à votre comptoir" }]}
      >
        <Input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Créer mon comptoir
        </Button>
      </Form.Item>
    </Form>
  );
}
