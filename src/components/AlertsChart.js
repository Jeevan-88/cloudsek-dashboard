import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", alerts: 5 },
  { day: "Tue", alerts: 12 },
  { day: "Wed", alerts: 8 },
  { day: "Thu", alerts: 15 },
  { day: "Fri", alerts: 7 },
  { day: "Sat", alerts: 4 },
  { day: "Sun", alerts: 9 },
];

export default function AlertsChart() {
  return (
    <div style={{ background: "#111", padding: 20, borderRadius: 8, marginTop: 30 }}>
      <h3 style={{ marginBottom: 20 }}>Alerts This Week</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#333" />
          <XAxis dataKey="day" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip />
          <Line type="monotone" dataKey="alerts" stroke="#4da6ff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
