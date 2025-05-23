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
  Progress,
} from "antd"
import {
  GlobalOutlined,
  TeamOutlined,
  MessageOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  CalendarOutlined,
  UserOutlined,
  FlagOutlined,
} from "@ant-design/icons"

const { TabPane } = Tabs
const { Title, Text } = Typography

const CrossBorderCollaboration = () => {
  // Mock data for international projects
  const internationalProjects = [
    {
      id: 1,
      name: "East African Highway Network",
      countries: ["Kenya", "Uganda", "Tanzania"],
      partners: [
        { name: "Kenya Highways Authority", country: "Kenya" },
        { name: "Uganda National Roads Authority", country: "Uganda" },
        { name: "Tanzania Roads Agency", country: "Tanzania" },
      ],
      startDate: "2023-01-15",
      endDate: "2025-12-31",
      status: "In Progress",
      completion: 35,
      budget: "$120M",
      nextMeeting: "2023-05-25",
    },
    {
      id: 2,
      name: "Regional Power Grid Integration",
      countries: ["Kenya", "Ethiopia", "Rwanda"],
      partners: [
        { name: "Kenya Power", country: "Kenya" },
        { name: "Ethiopian Electric Power", country: "Ethiopia" },
        { name: "Rwanda Energy Group", country: "Rwanda" },
      ],
      startDate: "2022-06-10",
      endDate: "2024-08-31",
      status: "In Progress",
      completion: 60,
      budget: "$85M",
      nextMeeting: "2023-05-30",
    },
    {
      id: 3,
      name: "Cross-Border Water Management",
      countries: ["Kenya", "Tanzania", "Burundi"],
      partners: [
        { name: "Kenya Water Resources Authority", country: "Kenya" },
        { name: "Tanzania Water Supply and Sanitation Authority", country: "Tanzania" },
        { name: "Burundi Water Authority", country: "Burundi" },
      ],
      startDate: "2023-03-01",
      endDate: "2024-04-30",
      status: "Planning",
      completion: 15,
      budget: "$45M",
      nextMeeting: "2023-05-22",
    },
  ]

  // Mock data for collaboration activities
  const collaborationActivities = [
    {
      id: 1,
      type: "Document Shared",
      project: "East African Highway Network",
      user: "John Kamau",
      organization: "Kenya Highways Authority",
      country: "Kenya",
      time: "2 hours ago",
      details: "Shared 'Environmental Impact Assessment Report'",
    },
    {
      id: 2,
      type: "Meeting Scheduled",
      project: "Regional Power Grid Integration",
      user: "Sarah Omondi",
      organization: "Kenya Power",
      country: "Kenya",
      time: "5 hours ago",
      details: "Scheduled 'Technical Committee Meeting' for May 30, 2023",
    },
    {
      id: 3,
      type: "Comment Added",
      project: "Cross-Border Water Management",
      user: "Michael Wanjiku",
      organization: "Kenya Water Resources Authority",
      country: "Kenya",
      time: "1 day ago",
      details: "Commented on 'Water Resource Allocation Plan'",
    },
    {
      id: 4,
      type: "Video Conference",
      project: "East African Highway Network",
      user: "David Muthoni",
      organization: "Kenya Highways Authority",
      country: "Kenya",
      time: "2 days ago",
      details: "Hosted 'Construction Progress Review' video conference",
    },
  ]

  // Mock data for upcoming meetings
  const upcomingMeetings = [
    {
      id: 1,
      title: "Technical Committee Meeting",
      project: "Regional Power Grid Integration",
      date: "May 30, 2023",
      time: "10:00 AM - 12:00 PM EAT",
      type: "Video Conference",
      participants: [
        { name: "John Kamau", organization: "Kenya Power", country: "Kenya" },
        { name: "Abebe Bekele", organization: "Ethiopian Electric Power", country: "Ethiopia" },
        { name: "Jean-Paul Kagame", organization: "Rwanda Energy Group", country: "Rwanda" },
      ],
    },
    {
      id: 2,
      title: "Environmental Impact Review",
      project: "East African Highway Network",
      date: "May 25, 2023",
      time: "2:00 PM - 4:00 PM EAT",
      type: "In-Person",
      location: "Nairobi, Kenya",
      participants: [
        { name: "Mary Ochieng", organization: "Kenya Highways Authority", country: "Kenya" },
        { name: "Joseph Museveni", organization: "Uganda National Roads Authority", country: "Uganda" },
        { name: "Grace Nyerere", organization: "Tanzania Roads Agency", country: "Tanzania" },
      ],
    },
    {
      id: 3,
      title: "Project Kickoff Meeting",
      project: "Cross-Border Water Management",
      date: "May 22, 2023",
      time: "9:00 AM - 11:00 AM EAT",
      type: "Hybrid",
      location: "Dar es Salaam, Tanzania",
      participants: [
        { name: "Samuel Njoroge", organization: "Kenya Water Resources Authority", country: "Kenya" },
        { name: "Fatima Hassan", organization: "Tanzania Water Supply and Sanitation Authority", country: "Tanzania" },
        { name: "Pierre Nkurunziza", organization: "Burundi Water Authority", country: "Burundi" },
      ],
    },
  ]

  // Columns for international projects table
  const projectsColumns = [
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Countries",
      dataIndex: "countries",
      key: "countries",
      render: (countries) => (
        <>
          {countries.map((country) => (
            <Tag icon={<FlagOutlined />} color="blue" key={country}>
              {country}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Timeline",
      key: "timeline",
      render: (_, record) => (
        <>
          <div>Start: {record.startDate}</div>
          <div>End: {record.endDate}</div>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "success"
        if (status === "Planning") {
          color = "processing"
        } else if (status === "Completed") {
          color = "default"
        }
        return <Badge status={color} text={status} />
      },
    },
    {
      title: "Completion",
      dataIndex: "completion",
      key: "completion",
      render: (completion) => <Progress percent={completion} size="small" />,
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Next Meeting",
      dataIndex: "nextMeeting",
      key: "nextMeeting",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button icon={<TeamOutlined />}>Team</Button>
          <Button icon={<MessageOutlined />}>Chat</Button>
          <Button icon={<FileTextOutlined />}>Docs</Button>
        </Space>
      ),
    },
  ]

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="International Projects"
              value={internationalProjects.length}
              valueStyle={{ color: "#1890ff" }}
              prefix={<GlobalOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Partner Countries"
              value={[...new Set(internationalProjects.flatMap((p) => p.countries))].length}
              valueStyle={{ color: "#52c41a" }}
              prefix={<FlagOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Upcoming Meetings"
              value={upcomingMeetings.length}
              valueStyle={{ color: "#faad14" }}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1" style={{ marginTop: "24px" }}>
        <TabPane tab="International Projects" key="1">
          <Table columns={projectsColumns} dataSource={internationalProjects} rowKey="id" />
        </TabPane>

        <TabPane tab="Upcoming Meetings" key="2">
          <List
            itemLayout="horizontal"
            dataSource={upcomingMeetings}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button key="join" type="primary" icon={<VideoCameraOutlined />}>
                    Join
                  </Button>,
                  <Button key="details">Details</Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar icon={<CalendarOutlined />} style={{ backgroundColor: "#1890ff" }} />}
                  title={
                    <Space>
                      <Text strong>{item.title}</Text>
                      <Tag color="blue">{item.project}</Tag>
                    </Space>
                  }
                  description={
                    <>
                      <p>
                        <CalendarOutlined /> {item.date}, {item.time}
                      </p>
                      <p>
                        <GlobalOutlined /> {item.type}
                        {item.location && ` - ${item.location}`}
                      </p>
                      <p>
                        <TeamOutlined /> Participants:{" "}
                        {item.participants.map((p) => (
                          <Tag icon={<UserOutlined />} key={p.name}>
                            {p.name} ({p.country})
                          </Tag>
                        ))}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>

        <TabPane tab="Recent Activity" key="3">
          <List
            itemLayout="horizontal"
            dataSource={collaborationActivities}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={
                    <Space>
                      <Text strong>{item.type}</Text>
                      <Tag color="blue">{item.project}</Tag>
                    </Space>
                  }
                  description={
                    <>
                      <p>
                        {item.user} ({item.organization}, {item.country}) - {item.time}
                      </p>
                      <p>{item.details}</p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default CrossBorderCollaboration
