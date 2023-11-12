import React, { useState } from 'react';
import './MagicSphere.css';

function getRandomElement(list) {
  let randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function MagicSphere({ answers }) {
  const [message, setMessage] = useState('Ask a question');
  const [sphereColor, setSphereColor] = useState('black');

  const handleSphereClick = () => {
    const { msg, color } = getRandomElement(answers);
    setMessage(msg);
    setSphereColor(color);
  };

  // here we go! 

  
  return (
    <div
      className="MagicSphere"
      onClick={handleSphereClick}
      style={{ backgroundColor: sphereColor }}
    >
      <strong>{message}</strong>
    </div>
  );
}
// sphere
MagicSphere.defaultProps = {
  answers: [
    // ... same answers as before ...
  ]
};

export default MagicSphere;
