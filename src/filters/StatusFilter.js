import React from "react";
import "../style.css";

const STATUS_OPTIONS = [
  {"val": "all", "display": "All"},
  {"val": "in-progress", "display": "In progress"},
  {"val":"waiting", "display": "Waiting"},
  {"val":"completed", "display": "Completed"}
];

export default function StatusFilter({setFn}) {

  return (
    <div>
      <select onChange={(e)=>setFn(e.target.value)}>
        {STATUS_OPTIONS.map((so)=> <option key={so.val} value={so.val}>{so.display}</option>)}
      </select>
    </div>
  );
}