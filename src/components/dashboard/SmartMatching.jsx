"use client"

import { useState } from "react"
import {
  Card,
  Table,
  Badge,
  Button,
  Space,
  Avatar,
  Tag,
  Tabs,
  List,
  Typography,
  Row,
  Col,
  Statistic,
  Select,
  Input,
  Modal,
  Divider,
  Rate,
} from "antd"
import {
  UserOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  FileSearchOutlined,
  DollarOutlined,
  StarOutlined,
  EnvironmentOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons"

const { TabPane } = Tabs
const { Title, Text } = Typography
const { Option } = Select
const { Search } = Input

const SmartMatching = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentRequest, setCurrentRequest] = useState(null)
  const [matchedProviders, setMatchedProviders] = useState([])

  // Mock data for service requests
  const serviceRequests = [
    {
      id: 1,
      title: "Residential Plumbing Installation",
      client: "John Doe",
      location: "Nairobi, Kenya",
      serviceType: "Plumbing",
      urgency: "High",
      budget: "$1,000 - $1,500",
      status: "Pending",
      datePosted: "2023-05-15",
      description:
        "Need a professional plumber for complete plumbing installation in a new 3-bedroom house. Work includes water supply lines, drainage, and fixture installation.",
      requirements: ["Licensed plumber", "5+ years experience", "Available immediately"],
    },
    {
      id: 2,
      title: "Commercial Electrical Wiring",
      client: "ABC Corporation",
      location: "Mombasa, Kenya",
      serviceType: "Electrical",
      urgency: "Medium",
      budget: "$3,000 - $5,000",
      status: "Matching",
      datePosted: "2023-05-14",
      description:
        "Seeking an electrician for wiring a new office space (approx. 2,000 sq ft). Work includes installing outlets, lighting, and setting up the main electrical panel.",
      requirements: ["Licensed electrician", "Commercial experience", "Insured"],
    },
    {
      id: 3,
      title: "Residential Painting Project",
      client: "Jane Smith",
      location: "Kisumu, Kenya",
      serviceType: "Painting",
      urgency: "Low",
      budget: "$800 - $1,200",
      status: "Matched",
      datePosted: "2023-05-10",
      description: "Need interior painting for a 2-bedroom apartment. Walls only, ceilings already done.",
      requirements: ["Quality paints", "Clean work", "Complete in 1 week"],
    },
  ]

  // Mock data for service providers
  const serviceProviders = [
    {
      id: 1,
      name: "Robert Kamau",
      specialization: "Plumbing",
      experience: 8,
      location: "Nairobi, Kenya",
      rating: 4.8,
      completedJobs: 124,
      availability: "Immediate",
      certifications: ["Licensed Plumber", "Water Conservation Specialist"],
      hourlyRate: "$25",
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      specialization: "Electrical",
      experience: 12,
      location: "Nairobi, Kenya",
      rating: 4.9,
      completedJobs: 215,
      availability: "Next Week",
      certifications: ["Licensed Electrician", "Commercial Specialist"],
      hourlyRate: "$30",
    },
    {
      id: 3,
      name: "James Omondi",
      specialization: "Plumbing",
      experience: 5,
      location: "Mombasa, Kenya",
      rating: 4.5,
      completedJobs: 87,
      availability: "Immediate",
      certifications: ["Licensed Plumber"],
      hourlyRate: "$22",
    },
    {
      id: 4,
      name: "Grace Muthoni",
      specialization: "Painting",
      experience: 7,
      location: "Kisumu, Kenya",
      rating: 4.7,
      completedJobs: 103,
      availability: "Immediate",
      certifications: ["Professional Painter"],
      hourlyRate: "$20",
    },
  ]

  // Columns for service requests table
  const requestsColumns = [
    {
      title: "Request",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <>
          <div>{text}</div>
          <div style={{ fontSize: "12px", color: "#888" }}>
            <EnvironmentOutlined /> {record.location}
          </div>
        </>
      ),
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Service Type",
      dataIndex: "serviceType",
      key: "serviceType",
      render: (type) => <Tag color="blue">{type}</Tag>,
    },
    {
      title: "Urgency",
      dataIndex: "urgency",
      key: "urgency",
      render: (urgency) => {
        let color = "green"
        if (urgency === "High") {
          color = "red"
        } else if (urgency === "Medium") {
          color = "orange"
        }
        return <Tag color={color}>{urgency}</Tag>
      },
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Posted",
      dataIndex: "datePosted",
      key: "datePosted",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "default"
        let icon = null
        if (status === "Pending") {
          color = "warning"
          icon = <ClockCircleOutlined />
        } else if (status === "Matching") {
          color = "processing"
          icon = <FileSearchOutlined />
        } else if (status === "Matched") {
          color = "success"
          icon = <CheckCircleOutlined />
        }
        return <Badge status={color} text={status} icon={icon} />
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => {
            setCurrentRequest(record)
            // Simulate matching algorithm
            const matched = serviceProviders.filter((provider) => provider.specialization === record.serviceType)
            setMatchedProviders(matched)
            setIsModalVisible(true)
          }}
        >
          Find Matches
        </Button>
      ),
    },
  ]

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Active Requests"
              value={serviceRequests.length}
              valueStyle={{ color: "#1890ff" }}
              prefix={<FileSearchOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Available Providers"
              value={serviceProviders.length}
              valueStyle={{ color: "#52c41a" }}
              prefix={<ToolOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Match Success Rate"
              value={85}
              valueStyle={{ color: "#faad14" }}
              prefix={<CheckCircleOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Card title="Smart Matching & Requisition Automation" style={{ marginTop: "24px" }}>
        <div style={{ marginBottom: "16px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Search placeholder="Search requests" allowClear />
            </Col>
            <Col span={16}>
              <Space>
                <Select defaultValue="all" style={{ width: 150 }}>
                  <Option value="all">All Service Types</Option>
                  <Option value="plumbing">Plumbing</Option>
                  <Option value="electrical">Electrical</Option>
                  <Option value="painting">Painting</Option>
                  <Option value="carpentry">Carpentry</Option>
                </Select>
                <Select defaultValue="all" style={{ width: 150 }}>
                  <Option value="all">All Locations</Option>
                  <Option value="nairobi">Nairobi</Option>
                  <Option value="mombasa">Mombasa</Option>
                  <Option value="kisumu">Kisumu</Option>
                </Select>
                <Select defaultValue="all" style={{ width: 150 }}>
                  <Option value="all">All Statuses</Option>
                  <Option value="pending">Pending</Option>
                  <Option value="matching">Matching</Option>
                  <Option value="matched">Matched</Option>
                </Select>
                <Button icon={<FilterOutlined />}>More Filters</Button>
                <Button icon={<SortAscendingOutlined />}>Sort</Button>
              </Space>
            </Col>
          </Row>
        </div>

        <Tabs defaultActiveKey="1">
          <TabPane tab="All Requests" key="1">
            <Table columns={requestsColumns} dataSource={serviceRequests} rowKey="id" />
          </TabPane>
          <TabPane tab="Pending" key="2">
            <Table
              columns={requestsColumns}
              dataSource={serviceRequests.filter((req) => req.status === "Pending")}
              rowKey="id"
            />
          </TabPane>
          <TabPane tab="Matching" key="3">
            <Table
              columns={requestsColumns}
              dataSource={serviceRequests.filter((req) => req.status === "Matching")}
              rowKey="id"
            />
          </TabPane>
          <TabPane tab="Matched" key="4">
            <Table
              columns={requestsColumns}
              dataSource={serviceRequests.filter((req) => req.status === "Matched")}
              rowKey="id"
            />
          </TabPane>
        </Tabs>
      </Card>

      <Modal
        title="Smart Matching Results"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        width={800}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {currentRequest && (
          <>
            <Card title="Request Details" style={{ marginBottom: "16px" }}>
              <Row gutter={16}>
                <Col span={16}>
                  <Title level={4}>{currentRequest.title}</Title>
                  <p>
                    <EnvironmentOutlined /> {currentRequest.location}
                  </p>
                  <p>{currentRequest.description}</p>
                  <div>
                    <Text strong>Requirements:</Text>
                    <ul>
                      {currentRequest.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <p>
                    <Text strong>Client:</Text> {currentRequest.client}
                  </p>
                  <p>
                    <Text strong>Service Type:</Text> <Tag color="blue">{currentRequest.serviceType}</Tag>
                  </p>
                  <p>
                    <Text strong>Urgency:</Text>{" "}
                    <Tag
                      color={
                        currentRequest.urgency === "High"
                          ? "red"
                          : currentRequest.urgency === "Medium"
                            ? "orange"
                            : "green"
                      }
                    >
                      {currentRequest.urgency}
                    </Tag>
                  </p>
                  <p>
                    <Text strong>Budget:</Text> {currentRequest.budget}
                  </p>
                  <p>
                    <Text strong>Posted:</Text> {currentRequest.datePosted}
                  </p>
                </Col>
              </Row>
            </Card>

            <Divider orientation="left">Matched Service Providers</Divider>

            <List
              itemLayout="horizontal"
              dataSource={matchedProviders}
              renderItem={(provider) => (
                <List.Item
                  actions={[
                    <Button key="view" icon={<UserOutlined />}>
                      View Profile
                    </Button>,
                    <Button key="match" type="primary" icon={<CheckCircleOutlined />}>
                      Select Provider
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar size={64} icon={<UserOutlined />} />}
                    title={
                      <Space>
                        <Text strong>{provider.name}</Text>
                        <Tag color="blue">{provider.specialization}</Tag>
                        <Rate disabled defaultValue={provider.rating} allowHalf />
                        <Text>{provider.rating}</Text>
                      </Space>
                    }
                    description={
                      <>
                        <Row gutter={16}>
                          <Col span={12}>
                            <p>
                              <EnvironmentOutlined /> {provider.location}
                            </p>
                            <p>
                              <ToolOutlined /> {provider.experience} years experience
                            </p>
                            <p>
                              <CheckCircleOutlined /> {provider.completedJobs} jobs completed
                            </p>
                          </Col>
                          <Col span={12}>
                            <p>
                              <ClockCircleOutlined /> Availability: {provider.availability}
                            </p>
                            <p>
                              <DollarOutlined /> Rate: {provider.hourlyRate}/hour
                            </p>
                            <p>
                              <StarOutlined /> Certifications:{" "}
                              {provider.certifications.map((cert) => (
                                <Tag key={cert}>{cert}</Tag>
                              ))}
                            </p>
                          </Col>
                        </Row>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </>
        )}
      </Modal>
    </div>
  )
}

export default SmartMatching
