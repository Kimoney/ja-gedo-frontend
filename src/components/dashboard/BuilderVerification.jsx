"use client"

import { useState } from "react"
import { Table, Badge, Button, Space, Modal, Form, Input, Select, Rate, Tabs, Tag, Avatar, Row, Col } from "antd"
import { UserOutlined, CheckCircleOutlined, CloseCircleOutlined, FileTextOutlined } from "@ant-design/icons"

const { TabPane } = Tabs
const { Option } = Select

const BuilderVerification = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentBuilder, setCurrentBuilder] = useState(null)
  const [form] = Form.useForm()

  // Mock data for pending verifications
  const pendingVerifications = [
    {
      id: 1,
      name: "John Kamau",
      company: "Kamau Builders Ltd",
      specialization: "Residential Construction",
      experience: 8,
      location: "Nairobi, Kenya",
      documents: ["License", "Insurance", "Portfolio"],
      status: "Pending",
    },
    {
      id: 2,
      name: "Mary Ochieng",
      company: "Ochieng & Associates",
      specialization: "Commercial Construction",
      experience: 12,
      location: "Mombasa, Kenya",
      documents: ["License", "Insurance", "Portfolio", "Certifications"],
      status: "Pending",
    },
    {
      id: 3,
      name: "Samuel Njoroge",
      company: "Njoroge Construction",
      specialization: "Infrastructure",
      experience: 5,
      location: "Kisumu, Kenya",
      documents: ["License", "Portfolio"],
      status: "Pending",
    },
  ]

  // Mock data for verified builders
  const verifiedBuilders = [
    {
      id: 4,
      name: "Elizabeth Wanjiku",
      company: "Wanjiku Enterprises",
      specialization: "Residential Construction",
      experience: 15,
      location: "Nairobi, Kenya",
      rating: 4.8,
      projects: 32,
      verificationLevel: "Gold",
      status: "Verified",
    },
    {
      id: 5,
      name: "David Muthoni",
      company: "Muthoni Builders",
      specialization: "Commercial Construction",
      experience: 10,
      location: "Nakuru, Kenya",
      rating: 4.5,
      projects: 24,
      verificationLevel: "Silver",
      status: "Verified",
    },
    {
      id: 6,
      name: "Grace Kipchoge",
      company: "Kipchoge Construction",
      specialization: "Infrastructure",
      experience: 7,
      location: "Eldoret, Kenya",
      rating: 4.2,
      projects: 18,
      verificationLevel: "Bronze",
      status: "Verified",
    },
  ]

  // Columns for pending verifications table
  const pendingColumns = [
    {
      title: "Builder",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          <div>
            <div>{text}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>{record.company}</div>
          </div>
        </Space>
      ),
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      key: "specialization",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      render: (years) => `${years} years`,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Documents",
      dataIndex: "documents",
      key: "documents",
      render: (documents) => (
        <>
          {documents.map((doc) => (
            <Tag icon={<FileTextOutlined />} color="blue" key={doc}>
              {doc}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Badge status="processing" text={status} />,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => showVerificationModal(record)}>
            Review
          </Button>
        </Space>
      ),
    },
  ]

  // Columns for verified builders table
  const verifiedColumns = [
    {
      title: "Builder",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          <div>
            <div>{text}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>{record.company}</div>
          </div>
        </Space>
      ),
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      key: "specialization",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      render: (years) => `${years} years`,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate disabled defaultValue={rating} allowHalf />,
    },
    {
      title: "Projects",
      dataIndex: "projects",
      key: "projects",
    },
    {
      title: "Verification Level",
      dataIndex: "verificationLevel",
      key: "verificationLevel",
      render: (level) => {
        let color = "green"
        if (level === "Gold") {
          color = "gold"
        } else if (level === "Silver") {
          color = "silver"
        } else if (level === "Bronze") {
          color = "brown"
        }
        return <Tag color={color}>{level}</Tag>
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Badge status="success" text={status} />,
    },
  ]

  const showVerificationModal = (builder) => {
    setCurrentBuilder(builder)
    setIsModalVisible(true)
    form.setFieldsValue({
      name: builder.name,
      company: builder.company,
      specialization: builder.specialization,
      experience: builder.experience,
      location: builder.location,
      verificationLevel: "Bronze",
      verificationNotes: "",
    })
  }

  const handleVerify = () => {
    form.validateFields().then((values) => {
      console.log("Verification approved:", values)
      setIsModalVisible(false)
      // Here you would typically make an API call to update the builder's status
    })
  }

  const handleReject = () => {
    form.validateFields().then((values) => {
      console.log("Verification rejected:", values)
      setIsModalVisible(false)
      // Here you would typically make an API call to reject the builder
    })
  }

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Pending Verifications" key="1">
          <Table columns={pendingColumns} dataSource={pendingVerifications} rowKey="id" />
        </TabPane>
        <TabPane tab="Verified Builders" key="2">
          <Table columns={verifiedColumns} dataSource={verifiedBuilders} rowKey="id" />
        </TabPane>
      </Tabs>

      <Modal
        title="Builder Verification Review"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="reject" danger icon={<CloseCircleOutlined />} onClick={handleReject}>
            Reject
          </Button>,
          <Button key="approve" type="primary" icon={<CheckCircleOutlined />} onClick={handleVerify}>
            Verify
          </Button>,
        ]}
        width={700}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Builder Name">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="company" label="Company">
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="specialization" label="Specialization">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="experience" label="Experience (Years)">
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="location" label="Location">
            <Input disabled />
          </Form.Item>
          <Form.Item name="verificationLevel" label="Verification Level">
            <Select>
              <Option value="Bronze">Bronze</Option>
              <Option value="Silver">Silver</Option>
              <Option value="Gold">Gold</Option>
            </Select>
          </Form.Item>
          <Form.Item name="verificationNotes" label="Verification Notes">
            <Input.TextArea rows={4} />
          </Form.Item>
          <div>
            <h4>Submitted Documents</h4>
            {currentBuilder?.documents.map((doc) => (
              <p key={doc}>
                <FileTextOutlined /> {doc} - <a href="#">View Document</a>
              </p>
            ))}
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default BuilderVerification

