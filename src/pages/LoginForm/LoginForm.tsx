import React from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  let navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/dashboard", { replace: true });
  };

  return (
    <Form form={form} onFinish={onFinish} className="login-form">
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input
          size="large"
          prefix={<MailOutlined style={{ color: "#1890FF" }} />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true }]}>
        <Input
          size="large"
          prefix={<LockOutlined style={{ color: "#1890FF" }} />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
