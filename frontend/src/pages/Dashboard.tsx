import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const token =
    localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(
    localStorage.getItem("user") || "{}",
  );

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <h2>
        Welcome {user.name}
      </h2>

      <p>Role: {user.role}</p>

      <div
        style={{
          border: "1px solid gray",
          padding: 20,
          marginTop: 20,
        }}
      >
        <h3>CP Stats</h3>

        <p>Problems Solved: 420</p>
        <p>Rating: 1450</p>
        <p>Current Streak: 15 days</p>
      </div>
    </div>
  );
}