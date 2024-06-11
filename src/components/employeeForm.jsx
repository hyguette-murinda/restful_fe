import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const EmployeeForm = () => (
  <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="laptop Id"
      name="laptop Id"
      rules={[
        {
          required: true,
          message: 'Please laptopid!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="firstname"
      name="firstname"
      rules={[
        {
          required: true,
          message: 'Please firstname!',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="lastname"
      name="lastname"
      rules={[
        {
          required: true,
          message: 'Please lastname!',
        },
      ]}
    >
      <Mentions />
      {/* <Input.TextArea /> */}
    </Form.Item>

    <Form.Item
      label="nationalId"
      name="nationalId"
      rules={[
        {
          required: true,
          message: 'Please national id!',
        },
      ]}
    >
      <Mentions />
    </Form.Item>

    <Form.Item
      label="mobile"
      name="mobile"
      rules={[
        {
          required: true,
          message: 'Please email!',
        },
      ]}
    >
      {/* <Select /> */}
      <Mentions />
    </Form.Item>

    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please enter email!',
        },
      ]}
    >
      {/* <Cascader /> */}
      <Mentions />
    </Form.Item>

    <Form.Item
      label="department"
      name="department"
      rules={[
        {
          required: true,
          message: 'Please enter department!',
        },
      ]}
    >
      {/* <TreeSelect /> */}
      <Mentions />
    </Form.Item>

    <Form.Item
      label="Position"
      name="Position"
      rules={[
        {
          required: true,
          message: 'Please enter position!',
        },
      ]}
    >
      <Mentions />
      {/* <DatePicker /> */}
    </Form.Item>
    <Form.Item
      label="laptopmanu"
      name="laptopmanu"
      rules={[
        {
          required: true,
          message: 'Please enter pc manufacturer!',
        },
      ]}
    >
      <Mentions />
      </Form.Item>
      <Form.Item
      label="model"
      name="model"
      rules={[
        {
          required: true,
          message: 'Please enter model!',
        },
      ]}
    >
      <Mentions />
      </Form.Item>
      <Form.Item
      label="serialnumber"
      name="serialnumber"
      rules={[
        {
          required: true,
          message: 'Please enter serial number!',
        },
      ]}
    >
      <Mentions />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className='bg-[#0B1355]'>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default EmployeeForm;