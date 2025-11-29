import "./AlertTable.css";

export default function AlertTable({ data }) {
  return (
    <table className="alert-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Severity</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.type}</td>
            <td className={`sev ${item.severity.toLowerCase()}`}>
              {item.severity}
            </td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
