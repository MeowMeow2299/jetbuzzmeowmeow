import React from 'react';
import './Publisher.css';

const Publisher = () => {
  const publishers = [
    { id: 1, name: "5G Gaming", image: "/photo/5G-COLOR.png" },
    { id: 2, name: "759 Gaming", image: "/photo/759-COLOR.png" },
    { id: 3, name: "AE Gaming", image: "/photo/AE-COLOR.png" },
    { id: 4, name: "AMBS Gaming", image: "/photo/AMBS-COLOR.png" },
    { id: 5, name: "AMG Gaming", image: "/photo/AMG-COLOR.png" },
    { id: 6, name: "AUX Gaming", image: "/photo/AUX-COLOR.png" },
    { id: 7, name: "BGA Gaming", image: "/photo/BGA-COLOR.png" },
    { id: 8, name: "BNG Gaming", image: "/photo/BNG-COLOR.png" },
    { id: 9, name: "BOM Gaming", image: "/photo/BOM-COLOR.png" },
    { id: 10, name: "BSP Gaming", image: "/photo/BSP-COLOR.png" },
    { id: 11, name: "BT Gaming", image: "/photo/BT-COLOR.png" },
    { id: 12, name: "BTG Gaming", image: "/photo/BTG-COLOR.png" },
    { id: 13, name: "BTI Gaming", image: "/photo/BTI-COLOR.png" },
    { id: 14, name: "CG Gaming", image: "/photo/CG-COLOR.png" },
    { id: 15, name: "EG4 Gaming", image: "/photo/EG4-COLOR.png" },
    { id: 16, name: "EP Gaming", image: "/photo/EP-COLOR.png" },
    { id: 17, name: "EZ Gaming", image: "/photo/EZ-COLOR.png" },
    { id: 18, name: "EZG Gaming", image: "/photo/EZG-COLOR.png" },
    { id: 19, name: "FB Gaming", image: "/photo/FB-COLOR.png" },
    { id: 20, name: "FC Gaming", image: "/photo/FC-COLOR.png" },
    { id: 21, name: "FP Gaming", image: "/photo/FP-COLOR.png" },
    { id: 22, name: "JILI Gaming", image: "/photo/JL-COLOR.png" }
  ];

  return (
    <div className="publisher-section">
      <div className="publisher-container">
        <h2 className="publisher-title">Publishers</h2>
        <div className="publisher-grid">
          {publishers.map((publisher) => (
            <div key={publisher.id} className="publisher-item">
              <div className="publisher-image-container">
                <img 
                  src={publisher.image} 
                  alt={publisher.name}
                  className="publisher-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="publisher-name">{publisher.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publisher;

