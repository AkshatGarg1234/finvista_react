import React from 'react';
import './Card.css'
const card = ({ title, description }) => {
  return (
    <div className="card">
    <h2 style={{ textDecoration: 'underline', color: 'white' }}>{title}</h2>
<p style={{ padding: '10px', color: 'white' }}>{description}</p>

    </div>
  );
};

export default card;
