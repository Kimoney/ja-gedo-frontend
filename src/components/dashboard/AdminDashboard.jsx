"use client"

import { useState } from "react"
import { Layout, Menu, Typography, Tabs, Button } from "antd"
import {
  UserOutlined,
  LogoutOutlined,
  SafetyOutlined,
  GlobalOutlined,
  FileSearchOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { useAuthStatus, useLogout } from "../../hooks/useAuth"

// Import dashboard components
import QualitySafetyMonitoring from "./QualitySafetyMonitoring"
import BuilderVerification from "./BuilderVerification"
import MaterialTraceability from "./MaterialTraceability"
import CrossBorderCollaboration from "./CrossBorderCollaboration"
import SmartMatching from "./SmartMatching"

const { Header, Sider, Content } = Layout
const { Title } = Typography
const { TabPane } = Tabs

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("1")
  const navigate = useNavigate()
  const { user } = useAuthStatus()
  const logout = useLogout()

  // Create a message function since we're not using Ant Design's App context
  const showMessage = (type, content) => {
    // You can replace this with a toast library or other notification system
    alert(`${type}: ${content}`)
  }

  const handleTabChange = (key) => {
    setActiveTab(key)
  }

  const menuItems = [
    {
      key: "1",
      icon: <SafetyOutlined />,
      label: "Quality & Safety",
    },
    {
      key: "2",
      icon: <FileSearchOutlined />,
      label: "Smart Matching",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Builder Verification",
    },
    {
      key: "4",
      icon: <GlobalOutlined />,
      label: "Cross-Border",
    },
    {
      key: "5",
      icon: <ReconciliationOutlined />,
      label: "Material Traceability",
    },
  ]

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          selectedKeys={[activeTab]}
          mode="inline"
          items={menuItems}
          onClick={(e) => setActiveTab(e.key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "24px",
          }}
        >
          <Title level={2} style={{ margin: "16px 24px", color: "#1890ff" }}>
            CONSTRUCTION TECH ADMIN
          </Title>
          <Button type="primary" danger icon={<LogoutOutlined />} onClick={logout}>
            Sign Out
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280, background: "#fff" }}>
          {/* Dashboard Overview */}
          {activeTab === "1" && <QualitySafetyMonitoring />}
          {activeTab === "2" && <SmartMatching />}
          {activeTab === "3" && <BuilderVerification />}
          {activeTab === "4" && <CrossBorderCollaboration />}
          {activeTab === "5" && <MaterialTraceability />}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminDashboard
