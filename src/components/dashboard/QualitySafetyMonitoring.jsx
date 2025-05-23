"use client"

import { useState } from "react"
import { Card, Table, Badge, Tabs, Timeline, Statistic, Row, Col, Alert, Progress } from "antd"
import { SafetyOutlined, WarningOutlined, CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons"

const { TabPane } = Tabs

const QualitySafetyMonitoring = () => {
  const [activeTab, setActiveTab] = useState("1")

  // Mock data for safety incidents
  const safetyIncidents = [
    {
      id: 1,
      project: "Commercial Building A",
      location: "Nairobi, Kenya",
      type: "Fall Hazard",
      severity: "High",
      reportedBy: "John Doe",
      date: "2023-05-15",
      status: "Open",
    },
    {
      id: 2,
      project: "Residential Complex B",
      location: "Mombasa, Kenya",
      type: "Electrical Issue",
      severity: "Medium",
      reportedBy: "Jane Smith",
      date: "2023-05-14",
      status: "In Progress",
    },
    {
      id: 3,
      project: "Highway Extension C",
      location: "Nakuru, Kenya",
      type: "Equipment Failure",
      severity: "Low",
      reportedBy: "Robert Johnson",
      date: "2023-05-10",
      status: "Resolved",
    },
  ]

  // Mock data for quality inspections
  const qualityInspections = [
    {
      id: 1,
      project: "Commercial Building A",
      inspector: "David Mwangi",
      date: "2023-05-16",
      score: 92,
      status: "Passed",
    },
    {
      id: 2,
      project: "Residential Complex B",
      inspector: "Sarah Ochieng",
      date: "2023-05-15",
      score: 78,
      status: "Needs Improvement",
    },
    {
      id: 3,
      project: "Highway Extension C",
      inspector: "Michael Wanjiku",
      date: "2023-05-12",
      score: 65,
      status: "Failed",
    },
  ]

  // Columns for safety incidents table
  const safetyColumns = [
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
      render: (severity) => {
        let color = "green"
        if (severity === "High") {
          color = "red"
        } else if (severity === "Medium") {
          color = "orange"
        }
        return <Badge color={color} text={severity} />
      },
    },
    {
      title: "Reported By",
      dataIndex: "reportedBy",
      key: "reportedBy",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "green"
        let icon = <CheckCircleOutlined />
        if (status === "Open") {
          color = "red"
          icon = <WarningOutlined />
        } else if (status === "In Progress") {
          color = "blue"
          icon = <ClockCircleOutlined />
        }
        return <Badge color={color} text={status} icon={icon} />
      },
    },
  ]

  // Columns for quality inspections table
  const qualityColumns = [
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Inspector",
      dataIndex: "inspector",
      key: "inspector",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: (score) => {
        let color = "success"
        if (score < 70) {
          color = "exception"
        } else if (score < 80) {
          color = "warning"
        }
        return <Progress percent={score} size="small" status={color} />
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "green"
        if (status === "Failed") {
          color = "red"
        } else if (status === "Needs Improvement") {
          color = "orange"
        }
        return <Badge color={color} text={status} />
      },
    },
  ]

  // Recent safety timeline events
  const safetyTimelineItems = [
    {
      color: "red",
      children: (
        <>
          <p>
            <strong>Fall Hazard Reported</strong> at Commercial Building A
          </p>
          <p>Reported by John Doe - 2 hours ago</p>
        </>
      ),
    },
    {
      color: "blue",
      children: (
        <>
          <p>
            <strong>Electrical Issue</strong> status changed to <Badge color="blue" text="In Progress" />
          </p>
          <p>Updated by Admin - 5 hours ago</p>
        </>
      ),
    },
    {
      color: "green",
      children: (
        <>
          <p>
            <strong>Equipment Failure</strong> marked as <Badge color="green" text="Resolved" />
          </p>
          <p>Resolved by Site Manager - 1 day ago</p>
        </>
      ),
    },
  ]

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Safety Incidents"
              value={safetyIncidents.length}
              valueStyle={{ color: "#cf1322" }}
              prefix={<SafetyOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Open Issues"
              value={safetyIncidents.filter((incident) => incident.status === "Open").length}
              valueStyle={{ color: "#faad14" }}
              prefix={<WarningOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Average Quality Score"
              value={
                qualityInspections.reduce((acc, inspection) => acc + inspection.score, 0) / qualityInspections.length
              }
              precision={1}
              valueStyle={{ color: "#3f8600" }}
              suffix="%"
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Alert
        message="Safety Alert"
        description="High severity fall hazard reported at Commercial Building A. Immediate attention required."
        type="error"
        showIcon
        style={{ margin: "24px 0" }}
      />

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Safety Incidents" key="1">
          <Table columns={safetyColumns} dataSource={safetyIncidents} rowKey="id" />
        </TabPane>
        <TabPane tab="Quality Inspections" key="2">
          <Table columns={qualityColumns} dataSource={qualityInspections} rowKey="id" />
        </TabPane>
        <TabPane tab="Recent Activity" key="3">
          <Timeline items={safetyTimelineItems} />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default QualitySafetyMonitoring
