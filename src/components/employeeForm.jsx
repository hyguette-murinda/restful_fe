import React, { useState } from 'react';
import {Button, Cascader, DatePicker, Form, Input,InputNumber,Mentions,Select,TreeSelect,} from 'antd';
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
const EmployeeForm = () => {
  const [laptopId, setLaptopId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [laptopmanu, setLaptopmanu] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("")







  return(
  <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="laptopId"
      name="laptopId"
      rules={[
        {
          required: true,
          message: 'Please laptopid!',
        },
      ]}
      value={laptopId}
      onChange={(e) =>setLaptopId(e.target.value) }
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
      value={firstname}
      onChange={(e) =>setFirstname(e.target.value) }
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
      value={lastname}
      onChange={(e) =>setLastname(e.target.value) }
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
      value={nationalId}
      onChange={(e) =>setNationalId(e.target.value) }
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
      value={mobile}
      onChange={(e) =>setMobile(e.target.value) }
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
      value={email}
      onChange={(e) =>setEmail(e.target.value) }
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
      value={department}
      onChange={(e) =>setDepartment(e.target.value) }
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
      value={position}
      onChange={(e) =>setPosition(e.target.value) }
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
      value={laptopmanu}
      onChange={(e) =>setLaptopmanu(e.target.value) }
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
      value={model}
      onChange={(e) =>setModel(e.target.value) }
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
      value={serialNumber}
      onChange={(e) =>setSerialNumber(e.target.value) }
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
)
};
export default EmployeeForm;