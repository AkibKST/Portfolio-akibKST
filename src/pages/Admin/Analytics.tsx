import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
} from "recharts";
import {
  TrendingUp,
  Eye,
  Clock,
  Mouse,
  MapPin,
  Monitor,
  Zap,
} from "lucide-react";

// Detailed analytics data
const performanceData = [
  { time: "00:00", pageLoad: 1.2, ttfb: 0.3, fcp: 0.8, lcp: 2.1 },
  { time: "04:00", pageLoad: 1.4, ttfb: 0.4, fcp: 0.9, lcp: 2.3 },
  { time: "08:00", pageLoad: 2.1, ttfb: 0.6, fcp: 1.2, lcp: 2.8 },
  { time: "12:00", pageLoad: 3.2, ttfb: 0.8, fcp: 1.5, lcp: 3.5 },
  { time: "16:00", pageLoad: 2.8, ttfb: 0.7, fcp: 1.4, lcp: 3.2 },
  { time: "20:00", pageLoad: 1.9, ttfb: 0.5, fcp: 1.0, lcp: 2.6 },
];

const geoData = [
  { country: "USA", visits: 4200, rate: 42.5 },
  { country: "India", visits: 2800, rate: 28.0 },
  { country: "UK", visits: 1200, rate: 12.0 },
  { country: "Canada", visits: 900, rate: 9.0 },
  { country: "Others", visits: 900, rate: 9.0 },
];

const deviceData = [
  { device: "Desktop", sessions: 6500, bounce: 32, conversion: 4.2 },
  { device: "Mobile", sessions: 4200, bounce: 45, conversion: 2.8 },
  { device: "Tablet", sessions: 2100, bounce: 38, conversion: 3.5 },
];

const hourlyData = [
  { hour: "12 AM", users: 120, bounceRate: 32 },
  { hour: "1 AM", users: 132, bounceRate: 28 },
  { hour: "2 AM", users: 101, bounceRate: 35 },
  { hour: "3 AM", users: 98, bounceRate: 38 },
  { hour: "4 AM", users: 78, bounceRate: 42 },
  { hour: "5 AM", users: 99, bounceRate: 39 },
  { hour: "6 AM", users: 88, bounceRate: 41 },
  { hour: "7 AM", users: 78, bounceRate: 45 },
  { hour: "8 AM", users: 220, bounceRate: 28 },
  { hour: "9 AM", users: 250, bounceRate: 25 },
  { hour: "10 AM", users: 210, bounceRate: 27 },
  { hour: "11 AM", users: 250, bounceRate: 24 },
  { hour: "12 PM", users: 500, bounceRate: 22 },
  { hour: "1 PM", users: 490, bounceRate: 21 },
  { hour: "2 PM", users: 680, bounceRate: 19 },
  { hour: "3 PM", users: 600, bounceRate: 20 },
  { hour: "4 PM", users: 550, bounceRate: 23 },
  { hour: "5 PM", users: 480, bounceRate: 25 },
  { hour: "6 PM", users: 420, bounceRate: 27 },
  { hour: "7 PM", users: 380, bounceRate: 29 },
  { hour: "8 PM", users: 350, bounceRate: 31 },
  { hour: "9 PM", users: 320, bounceRate: 32 },
  { hour: "10 PM", users: 280, bounceRate: 34 },
  { hour: "11 PM", users: 200, bounceRate: 36 },
];

const MetricBox = ({ icon: Icon, label, value, change, color }: any) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p
            className={`text-xs mt-2 ${change >= 0 ? "text-green-600" : "text-red-600"}`}
          >
            {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% from last week
          </p>
        </div>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </CardContent>
  </Card>
);

export default function AdminAnalytics() {
  return (
    <>
      <Helmet>
        <title>Analytics - Akib KST Portfolio Admin</title>
        <meta
          name="description"
          content="Detailed analytics with performance metrics and visitor behavior analysis."
        />
        <meta name="og:title" content="Analytics" />
      </Helmet>
      <div className="space-y-8 pb-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Detailed Analytics
          </h1>
          <p className="text-muted-foreground mt-2">
            In-depth performance metrics and visitor behavior analysis
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricBox
            icon={Eye}
            label="Page Views"
            value="12,456"
            change={8.5}
            color="text-blue-500"
          />
          <MetricBox
            icon={Clock}
            label="Avg Session Time"
            value="4:23"
            change={-2.1}
            color="text-green-500"
          />
          <MetricBox
            icon={Mouse}
            label="Bounce Rate"
            value="28.5%"
            change={-5.2}
            color="text-red-500"
          />
          <MetricBox
            icon={Zap}
            label="Conversion Rate"
            value="3.8%"
            change={12.3}
            color="text-yellow-500"
          />
        </div>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-500" />
              Page Performance (Core Web Vitals)
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-2">
              Real-time page load performance metrics throughout the day
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#999" />
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
                  dataKey="pageLoad"
                  stroke="#00d4ff"
                  fill="#00d4ff"
                  fillOpacity={0.1}
                  name="Page Load (s)"
                />
                <Bar dataKey="ttfb" fill="#ff6b6b" name="TTFB (s)" />
                <Line
                  type="monotone"
                  dataKey="lcp"
                  stroke="#ffd700"
                  strokeWidth={2}
                  name="LCP (s)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Hourly Traffic */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-500" />
              Hourly Traffic Distribution
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-2">
              User activity and bounce rate by hour of the day
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="hour" stroke="#999" angle={-45} height={80} />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="users"
                  fill="#00d4ff"
                  name="Active Users"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="bounceRate"
                  stroke="#ff6b6b"
                  strokeWidth={2}
                  yAxisId="right"
                  name="Bounce Rate %"
                />
                <YAxis yAxisId="right" orientation="right" stroke="#999" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device & Geographic Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-indigo-500" />
                Device Performance
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-2">
                Conversion rates by device type
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deviceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis type="number" stroke="#999" />
                  <YAxis dataKey="device" type="category" stroke="#999" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #333",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sessions" fill="#00d4ff" name="Sessions" />
                  <Bar
                    dataKey="conversion"
                    fill="#00ff00"
                    name="Conv. Rate %"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Geographic Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                Geographic Distribution
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-2">
                Visitor distribution by country
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={geoData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="country" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #333",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="visits"
                    fill="#61dafb"
                    name="Visits"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="rate"
                    fill="#3178c6"
                    name="% Share"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Key Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <h3 className="font-semibold text-cyan-400 mb-2">
                  📈 Peak Hours
                </h3>
                <p className="text-sm text-gray-300">
                  Highest traffic occurs between 12 PM - 3 PM. Consider
                  scheduling deployment updates during low-traffic hours (2 AM -
                  5 AM).
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                <h3 className="font-semibold text-green-400 mb-2">
                  ✅ Performance
                </h3>
                <p className="text-sm text-gray-300">
                  Your site loads 28% faster than industry average. LCP is 2.5s
                  - excellent for web vitals compliance.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  📱 Mobile Optimization
                </h3>
                <p className="text-sm text-gray-300">
                  Desktop drives 60% of traffic with better conversion (4.2%).
                  Focus SEO efforts on desktop-first optimization.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-lg border border-pink-500/20">
                <h3 className="font-semibold text-pink-400 mb-2">
                  🌍 Top Markets
                </h3>
                <p className="text-sm text-gray-300">
                  USA (42.5%) and India (28%) are primary markets. Localization
                  content for these regions could boost engagement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
