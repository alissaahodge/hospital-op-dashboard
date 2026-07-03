import React, {useState} from "react";
import "./style.css";

const MOCK_PATIENTS = [
  { id: 1, name: 'Maria Chen', status: 'waiting', priority: 'high' },
  { id: 2, name: 'James Okafor', status: 'in-progress', priority: 'medium' },
  { id: 3, name: 'Priya Patel', status: 'waiting', priority: 'low' },
  { id: 4, name: 'Carlos Rivera', status: 'completed', priority: 'high' },
  { id: 5, name: 'Aisha Diallo', status: 'waiting', priority: 'medium' },
];

export default function App() {
  const [patients, setPatients] = useState(MOCK_PATIENTS);

  return (
    <div>
      <h1>Hospital Operations Dashboard</h1>
      <p>{patients.length} patients loaded</p>
    </div>
  );
}