import "./StatCard.css";

export default function StatCard({ title, value, color }) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p style={{ color }}>{value}</p>
    </div>
  );
}
