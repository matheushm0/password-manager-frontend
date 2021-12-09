import React from "react";

import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("*Add api post here* \n", values);
  };

  return (
    <Form {...formItemLayout} form={form} onFinish={onFinish}>
      <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="senha" label="Senha" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Finalizar Cadastro
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
