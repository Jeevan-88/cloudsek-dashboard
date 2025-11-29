import StatCard from "../components/StatCard";
import AlertsChart from "../components/AlertsChart";
import SeverityChart from "../components/SeverityChart";


export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <StatCard title="Total Alerts" value="128" color="#4da6ff" />
        <StatCard title="Critical Alerts" value="12" color="#ff4d4d" />
        <StatCard title="Open Incidents" value="7" color="#ffaa00" />
        <StatCard title="Today Alerts" value="9" color="#66ff99" />
      </div>

      <AlertsChart />
      <SeverityChart />

    </div>
  );
}
