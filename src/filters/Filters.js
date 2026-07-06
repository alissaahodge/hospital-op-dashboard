import React, {useEffect, useState} from "react";
import StatusFilter from "./StatusFilter";
import "../style.css";

export default function Filters({patients, setFn}) {
  const [nameQuery, setnameQuery] = useState(null);
  const [statusQuery, setStatusQuery] = useState("all");

  useEffect(()=>{
    let filteredPatients = patients.filter((patient)=>{
      if(nameQuery && !(patient.name.toLowerCase().includes(nameQuery.toLowerCase()))){
        return false;
      }
      if(statusQuery!=="all" && patient.status !== statusQuery){
        return false;
      }

      return true;
    });

    setFn(filteredPatients);
  }, [nameQuery, statusQuery]);

  return (
    <div>
      <span>
        <input type="text" placeholder="Search By Patient Name" onChange={(e)=>setnameQuery(e.target.value)}></input>
        <StatusFilter setFn={setStatusQuery}></StatusFilter>
      </span>
    </div>
  );
}