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

const PasswordForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("*Add api post here* \n", values);
  };

  return (
    <Form {...formItemLayout} form={form} onFinish={onFinish}>
      <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="url" label="URL">
        <Input />
      </Form.Item>

      <Form.Item name="username" label="Usuário" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Senha" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="descricao"
        label="Descrição"
        rules={[{ required: true }]}
      >
        <Input.TextArea showCount maxLength={250} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordForm;
