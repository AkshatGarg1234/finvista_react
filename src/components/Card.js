import React from 'react';
// import CardData from './Card';
import CardData from './CardData';
import './Card.css'
function Card() {
  return (
    <div className="CardData">
      <CardData
        title="Enhanced Security Measures"
        description="Our platform employs state-of-the-art encryption techniques to ensure the security and privacy of your data. Rest assured that your information is safe with us."
       />
      <CardData
        title="Seamless Integration"
        description="Easily integrate our services with your existing systems and workflows. Our flexible APIs and intuitive interfaces make integration a breeze, allowing you to streamline your operations effortlessly"
      />
      <CardData
        title="Dedicated Support Team"
        description=" Our dedicated support team is available 24/7 to assist you with any inquiries or issues you may encounter. Whether it's technical assistance or general inquiries, we're here to help you every step of the way."
      />
    </div>
  );
}

export default Card;
