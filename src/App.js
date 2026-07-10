import React, {useState} from "react";
import Filters from "./filters/Filters";
import PatientCard from "./components/PatientCard";
import {MOCK_PATIENTS} from "./utilities/MockPatients";
import {STATUS_OPTIONS_CYCLE} from "./utilities/StatusOptions";
import "./style.css";

export default function App() {
  const [patients, setPatients] = useState(MOCK_PATIENTS);
  const advancePatientCycle = (id)=>{
    setPatients((prev)=>{
      prev.map((p)=>{
        if(p.id !== id){
          return p;
        }
        p.status = STATUS_OPTIONS_CYCLE[p.status];
        return p;
      })
    })
  };

  return (
    <div>
      <h1>Hospital Operations Dashboard</h1>
      <Filters patients={patients} setFn={setPatients}></Filters>
      <p>
        Patients list
        <ul>
          {patients.map((p)=> <PatientCard patient={p} cycleFn={advancePatientCycle}></PatientCard>)}
        </ul>
      </p>
    </div>
  );
}