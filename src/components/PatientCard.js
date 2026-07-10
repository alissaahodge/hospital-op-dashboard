import React from 'react';
import '../style.css';

export default function PatientCard({ patient, cycleFn }) {
  return (
      <li key={patient.id}>
        {patient.name}: {patient.status}{' '}
        <button class={patient.status} onClick={() => cycleFn(patient.id)}>
          Advance
        </button>
      </li>
  );
}
