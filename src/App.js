import React, {useState} from "react";
import Filters from "./filters/Filters";
import {MOCK_PATIENTS} from "./utilities/MockPatients";
import "./style.css";

export default function App() {
  const [patients, setPatients] = useState(MOCK_PATIENTS);

  return (
    <div>
      <h1>Hospital Operations Dashboard</h1>
      <Filters patients={patients} setFn={setPatients}></Filters>
      <p>
        Patients list
        <ul>
          {patients.map((p)=> <li key={p.id}>{p.name} - {p.status}</li>)}
        </ul>
      </p>
    </div>
  );
}