import React from "react";
import { signup } from "../../api/Api";

import { Form, Input, Button, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    signup(values);
    form.resetFields();
    message.success("Usuario cadastrado com sucesso!");
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="nome" rules={[{ required: true }]}>
        <Input
          size="large"
          prefix={<UserOutlined style={{ color: "#1890FF" }} />}
          placeholder="Nome"
        />
      </Form.Item>

      <Form.Item name="email" rules={[{ required: true }]}>
        <Input
          size="large"
          prefix={<MailOutlined style={{ color: "#1890FF" }} />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item name="senha" rules={[{ required: true }]}>
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
          Cadastre-se
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
