"use client"

import { useState } from "react"
import { Card, Table, Badge, Tabs, Timeline, Tag, Space, Button, Modal, Descriptions, Row, Col, Statistic } from "antd"
import {
  EnvironmentOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  ReconciliationOutlined,
  QrcodeOutlined,
  SearchOutlined,
} from "@ant-design/icons"

const { TabPane } = Tabs

const MaterialTraceability = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentMaterial, setCurrentMaterial] = useState(null)

  // Mock data for materials
  const materials = [
    {
      id: 1,
      name: "Cement",
      brand: "Bamburi",
      supplier: "Bamburi Cement Ltd",
      origin: "Kenya",
      ecoRating: "A",
      certifications: ["ISO 14001", "Green Building"],
      carbonFootprint: "Low",
      batchNumber: "BC-2023-05-001",
      deliveryDate: "2023-05-10",
      project: "Commercial Building A",
      status: "Verified",
    },
    {
      id: 2,
      name: "Steel Bars",
      brand: "Devki Steel",
      supplier: "Devki Steel Mills",
      origin: "Kenya",
      ecoRating: "B",
      certifications: ["ISO 9001"],
      carbonFootprint: "Medium",
      batchNumber: "DS-2023-05-002",
      deliveryDate: "2023-05-12",
      project: "Residential Complex B",
      status: "Pending Verification",
    },
    {
      id: 3,
      name: "Timber",
      brand: "Eco Timber",
      supplier: "Sustainable Forestry Co.",
      origin: "Uganda",
      ecoRating: "A+",
      certifications: ["FSC", "PEFC", "Rainforest Alliance"],
      carbonFootprint: "Very Low",
      batchNumber: "ET-2023-05-003",
      deliveryDate: "2023-05-15",
      project: "Highway Extension C",
      status: "Verified",
    },
    {
      id: 4,
      name: "Glass Panels",
      brand: "Crystal Clear",
      supplier: "Modern Glass Solutions",
      origin: "Tanzania",
      ecoRating: "B+",
      certifications: ["ISO 9001", "Energy Star"],
      carbonFootprint: "Medium",
      batchNumber: "CC-2023-05-004",
      deliveryDate: "2023-05-18",
      project: "Commercial Building A",
      status: "In Transit",
    },
  ]

  // Mock data for material journey
  const materialJourney = [
    {
      date: "2023-05-01",
      location: "Manufacturing Plant, Mombasa",
      status: "Manufactured",
      details: "Batch BC-2023-05-001 produced",
    },
    {
      date: "2023-05-03",
      location: "Quality Control, Mombasa",
      status: "Quality Checked",
      details: "Passed all quality tests",
    },
    {
      date: "2023-05-05",
      location: "Distribution Center, Nairobi",
      status: "In Transit",
      details: "Shipped to Nairobi distribution center",
    },
    {
      date: "2023-05-08",
      location: "Distribution Center, Nairobi",
      status: "Arrived",
      details: "Received at distribution center",
    },
    {
      date: "2023-05-10",
      location: "Commercial Building A, Nairobi",
      status: "Delivered",
      details: "Delivered to construction site",
    },
    {
      date: "2023-05-10",
      location: "Commercial Building A, Nairobi",
      status: "Verified",
      details: "Material verified by site manager",
    },
  ]

  // Columns for materials table
  const materialsColumns = [
    {
      title: "Material",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand/Supplier",
      dataIndex: "brand",
      key: "brand",
      render: (text, record) => (
        <>
          <div>{text}</div>
          <div style={{ fontSize: "12px", color: "#888" }}>{record.supplier}</div>
        </>
      ),
    },
    {
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
      render: (text) => (
        <Space>
          <EnvironmentOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: "Eco Rating",
      dataIndex: "ecoRating",
      key: "ecoRating",
      render: (rating) => {
        let color = "green"
        if (rating === "C") {
          color = "orange"
        } else if (rating === "D" || rating === "F") {
          color = "red"
        } else if (rating === "B" || rating === "B+") {
          color = "lime"
        } else if (rating === "A+" || rating === "A") {
          color = "green"
        }
        return <Tag color={color}>{rating}</Tag>
      },
    },
    {
      title: "Certifications",
      dataIndex: "certifications",
      key: "certifications",
      render: (certifications) => (
        <>
          {certifications.map((cert) => (
            <Tag color="blue" key={cert}>
              {cert}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Batch Number",
      dataIndex: "batchNumber",
      key: "batchNumber",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "success"
        if (status === "Pending Verification") {
          color = "warning"
        } else if (status === "In Transit") {
          color = "processing"
        }
        return <Badge status={color} text={status} />
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              setCurrentMaterial(record)
              setIsModalVisible(true)
            }}
          >
            Track
          </Button>
          <Button icon={<QrcodeOutlined />}>QR Code</Button>
        </Space>
      ),
    },
  ]

  // Timeline items for material journey
  const timelineItems = materialJourney.map((step) => ({
    color: step.status === "Verified" ? "green" : "blue",
    children: (
      <>
        <p>
          <strong>{step.status}</strong> - {step.date}
        </p>
        <p>
          <EnvironmentOutlined /> {step.location}
        </p>
        <p>{step.details}</p>
      </>
    ),
  }))

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Eco-Certified Materials"
              value={materials.filter((m) => m.ecoRating.startsWith("A")).length}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CheckCircleOutlined />}
              suffix={`/ ${materials.length}`}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Materials Tracked"
              value={materials.length}
              valueStyle={{ color: "#1890ff" }}
              prefix={<BarChartOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Verification Rate"
              value={(materials.filter((m) => m.status === "Verified").length / materials.length) * 100}
              precision={1}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ReconciliationOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Card title="Material Traceability & Eco-Friendly Sourcing" style={{ marginTop: "24px" }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="All Materials" key="1">
            <Table columns={materialsColumns} dataSource={materials} rowKey="id" />
          </TabPane>
          <TabPane tab="Eco-Certified" key="2">
            <Table
              columns={materialsColumns}
              dataSource={materials.filter((m) => m.ecoRating.startsWith("A"))}
              rowKey="id"
            />
          </TabPane>
          <TabPane tab="Pending Verification" key="3">
            <Table
              columns={materialsColumns}
              dataSource={materials.filter((m) => m.status === "Pending Verification")}
              rowKey="id"
            />
          </TabPane>
        </Tabs>
      </Card>

      <Modal
        title="Material Tracking Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
        width={800}
      >
        {currentMaterial && (
          <>
            <Descriptions title="Material Information" bordered column={2}>
              <Descriptions.Item label="Material">{currentMaterial.name}</Descriptions.Item>
              <Descriptions.Item label="Brand">{currentMaterial.brand}</Descriptions.Item>
              <Descriptions.Item label="Supplier">{currentMaterial.supplier}</Descriptions.Item>
              <Descriptions.Item label="Origin">{currentMaterial.origin}</Descriptions.Item>
              <Descriptions.Item label="Eco Rating">{currentMaterial.ecoRating}</Descriptions.Item>
              <Descriptions.Item label="Carbon Footprint">{currentMaterial.carbonFootprint}</Descriptions.Item>
              <Descriptions.Item label="Batch Number">{currentMaterial.batchNumber}</Descriptions.Item>
              <Descriptions.Item label="Delivery Date">{currentMaterial.deliveryDate}</Descriptions.Item>
              <Descriptions.Item label="Project">{currentMaterial.project}</Descriptions.Item>
              <Descriptions.Item label="Status">{currentMaterial.status}</Descriptions.Item>
              <Descriptions.Item label="Certifications" span={2}>
                {currentMaterial.certifications.map((cert) => (
                  <Tag color="blue" key={cert}>
                    {cert}
                  </Tag>
                ))}
              </Descriptions.Item>
            </Descriptions>

            <div style={{ marginTop: "24px" }}>
              <h3>Material Journey</h3>
              <Timeline items={timelineItems} />
            </div>
          </>
        )}
      </Modal>
    </div>
  )
}

export default MaterialTraceability
