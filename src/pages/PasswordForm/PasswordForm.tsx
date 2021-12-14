import React from "react";

import { Form, Input, Button, message } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
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
      offset: 4,
    },
  },
};

type Props = {
  formType: string;
};

const PasswordForm: React.FC<Props> = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (props.formType === "edit") {
      console.log("*Add api put here* \n", values);
      form.resetFields();
      message.success("Dados editados com sucesso!");
    }

    if (props.formType === "new") {
      console.log("*Add api post here* \n", values);
      form.resetFields();
      message.success("Senha adicionada com sucesso!");
    }
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

      <Form.Item name="descricao" label="Descrição">
        <Input.TextArea showCount maxLength={250} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          {props.formType === "new" ? "Cadastrar" : "Salvar"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordForm;
