import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "High", value: 12 },
  { name: "Medium", value: 32 },
  { name: "Low", value: 84 },
];

const COLORS = ["#ff4d4d", "#ffaa00", "#66ff99"];

export default function SeverityChart() {
  return (
    <div style={{ background: "#111", padding: 20, borderRadius: 8, marginTop: 30 }}>
      <h3 style={{ marginBottom: 20 }}>Alert Severity Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
