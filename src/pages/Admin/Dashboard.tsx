import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import {
  BarChart3,
  Users,
  TrendingUp,
  Activity,
  Code2,
  GitBranch,
  Zap,
  Database,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// Sample data for charts
const visitorsData = [
  { month: "Jan", visitors: 4000, projects: 2400, blog: 1600 },
  { month: "Feb", visitors: 3000, projects: 1398, blog: 1200 },
  { month: "Mar", visitors: 2000, projects: 9800, blog: 2290 },
  { month: "Apr", visitors: 2780, projects: 3908, blog: 2000 },
  { month: "May", visitors: 1890, projects: 4800, blog: 2181 },
  { month: "Jun", visitors: 2390, projects: 3800, blog: 2500 },
];

const projectStats = [
  { name: "Completed", value: 18, color: "#00d4ff" },
  { name: "In Progress", value: 5, color: "#ff6b6b" },
  { name: "Planning", value: 8, color: "#ffd700" },
];

const techStackData = [
  { tech: "React", projects: 12, stars: 4.8 },
  { tech: "TypeScript", projects: 10, stars: 4.9 },
  { tech: "Node.js", projects: 8, stars: 4.7 },
  { tech: "3D Web", projects: 5, stars: 4.6 },
  { tech: "Cloud", projects: 6, stars: 4.5 },
];

const engagementData = [
  { week: "W1", pageViews: 400, avgTime: 2.4, bounce: 24 },
  { week: "W2", pageViews: 300, avgTime: 1.398, bounce: 22 },
  { week: "W3", pageViews: 200, avgTime: 9.8, bounce: 29 },
  { week: "W4", pageViews: 278, avgTime: 3.908, bounce: 20 },
];

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className={`h-5 w-5 ${color}`} />
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-2">
        <span className="text-green-600 font-semibold">↑ {change}</span> from
        last month
      </p>
    </CardContent>
  </Card>
);

export default function AdminDashboard() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Admin dashboard with real-time analytics and performance metrics."
        />
        <meta name="og:title" content="Admin Dashboard" />
      </Helmet>
      <div className="space-y-8 pb-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Admin Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time insights and performance metrics of your portfolio
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Visitors"
            value="14,234"
            change="12.5%"
            icon={Users}
            color="text-blue-500"
          />
          <StatCard
            title="Projects Completed"
            value="18"
            change="2"
            icon={Code2}
            color="text-green-500"
          />
          <StatCard
            title="Blog Articles"
            value="24"
            change="5"
            icon={BarChart3}
            color="text-purple-500"
          />
          <StatCard
            title="Avg Engagement"
            value="4.8 min"
            change="18.2%"
            icon={Activity}
            color="text-pink-500"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visitors Trend Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-500" />
                Visitor Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={visitorsData}>
                  <defs>
                    <linearGradient
                      id="colorVisitors"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorProjects"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #333",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#00d4ff"
                    fillOpacity={1}
                    fill="url(#colorVisitors)"
                  />
                  <Area
                    type="monotone"
                    dataKey="projects"
                    stroke="#ff6b6b"
                    fillOpacity={1}
                    fill="url(#colorProjects)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Project Status Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-pink-500" />
                Project Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectStats}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {projectStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Technology Stack Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={techStackData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="tech" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="projects"
                  fill="#00d4ff"
                  name="Projects Used"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="stars"
                  fill="#ff6b6b"
                  name="Avg Rating"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" />
              Weekly Engagement Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="week" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pageViews"
                  stroke="#00d4ff"
                  strokeWidth={2}
                  dot={{ fill: "#00d4ff", r: 4 }}
                  name="Page Views"
                />
                <Line
                  type="monotone"
                  dataKey="avgTime"
                  stroke="#ffd700"
                  strokeWidth={2}
                  dot={{ fill: "#ffd700", r: 4 }}
                  name="Avg Time (min)"
                />
                <Line
                  type="monotone"
                  dataKey="bounce"
                  stroke="#ff6b6b"
                  strokeWidth={2}
                  dot={{ fill: "#ff6b6b", r: 4 }}
                  name="Bounce Rate %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-500" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  Total Page Views
                </span>
                <span className="text-xl font-bold">45,231</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  New Visitors
                </span>
                <span className="text-xl font-bold">3,124</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  Returning Visitors
                </span>
                <span className="text-xl font-bold">2,856</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Avg Session Duration
                </span>
                <span className="text-xl font-bold">4:23</span>
              </div>
            </CardContent>
          </Card>

          {/* Popular Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Most Visited Pages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm">/projects</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-xs font-semibold">8,432</span>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm">/blog</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-xs font-semibold">6,231</span>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm">/about</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-semibold">4,123</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">/contact</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs font-semibold">2,987</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
