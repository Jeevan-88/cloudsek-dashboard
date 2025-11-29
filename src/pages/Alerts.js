import AlertTable from "../components/AlertTable";

export default function Alerts() {
  const mockAlerts = [
    { id: 1, type: "Phishing", severity: "High", status: "Open" },
    { id: 2, type: "Malware", severity: "Medium", status: "Investigating" },
    { id: 3, type: "Leak", severity: "Low", status: "Resolved" },
  ];

  return (
    <div>
      <h1>Alerts</h1>
      <AlertTable data={mockAlerts} />
    </div>
  );
}
