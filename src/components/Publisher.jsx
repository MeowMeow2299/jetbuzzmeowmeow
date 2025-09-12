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
    { id: 22, name: "JILI Gaming", image: "/photo/JL-COLOR.png" },
    { id: 23, name: "FS Gaming", image: "/photo/FS-COLOR.png" },
    { id: 24, name: "FTG Gaming", image: "/photo/FTG-COLOR.png" },
    { id: 25, name: "GM Gaming", image: "/photo/GM-COLOR.png" },
    { id: 26, name: "GPI Gaming", image: "/photo/GPI-COLOR.png" },
    { id: 27, name: "HS Gaming", image: "/photo/HS-COLOR.png" },
    { id: 28, name: "IA Gaming", image: "/photo/IA-COLOR.png" },
    { id: 29, name: "JDB Gaming", image: "/photo/JDB-COLOR.png" },
    { id: 30, name: "JK Gaming", image: "/photo/JK-COLOR.png" },
    { id: 31, name: "KP Gaming", image: "/photo/KP-COLOR.png" },
    { id: 32, name: "L22 Gaming", image: "/photo/L22-COLOR.png" },
    { id: 33, name: "LUC Gaming", image: "/photo/LUC-COLOR.png" },
    { id: 34, name: "MA Gaming", image: "/photo/MA-COLOR.png" },
    { id: 35, name: "MAHA Gaming", image: "/photo/MAHA-COLOR.png" },
    { id: 36, name: "MAS Gaming", image: "/photo/MAS-COLOR.png" },
    { id: 37, name: "MG Gaming", image: "/photo/MG-COLOR.png" },
    { id: 38, name: "MNP Gaming", image: "/photo/MNP-COLOR.png" },
    { id: 39, name: "NE Gaming", image: "/photo/NE-COLOR.png" },
    { id: 40, name: "NG Gaming", image: "/photo/NG-COLOR.png" },
    { id: 41, name: "NLC Gaming", image: "/photo/NLC-COLOR.png" },
    { id: 42, name: "NS Gaming", image: "/photo/NS-COLOR.png" },
    { id: 43, name: "OBS Gaming", image: "/photo/OBS-COLOR.png" },
    { id: 44, name: "OBSB Gaming", image: "/photo/OBSB-COLOR.png" },
    { id: 45, name: "OCT Gaming", image: "/photo/OCT-COLOR.png" },
    { id: 46, name: "PAS Gaming", image: "/photo/PAS-COLOR.png" },
    { id: 47, name: "PG Gaming", image: "/photo/PG-COLOR.png" },
    { id: 48, name: "PIN Gaming", image: "/photo/PIN-COLOR.png" },
    { id: 49, name: "PP Gaming", image: "/photo/PP-COLOR.png" },
    { id: 50, name: "PS Gaming", image: "/photo/PS-COLOR.png" },
    { id: 51, name: "PT Gaming", image: "/photo/PT-COLOR.png" },
    { id: 52, name: "RCB Gaming", image: "/photo/RCB-COLOR.png" },
    { id: 53, name: "RLX Gaming", image: "/photo/RLX-COLOR.png" },
    { id: 54, name: "RT Gaming", image: "/photo/RT-COLOR.png" },
    { id: 55, name: "SA Gaming", image: "/photo/SA-COLOR.png" },
    { id: 56, name: "SB Gaming", image: "/photo/SB-COLOR.png" },
    { id: 57, name: "SEX Gaming", image: "/photo/SEX-COLOR.png" },
    { id: 58, name: "SG Gaming", image: "/photo/SG-COLOR.png" },
    { id: 59, name: "SPB Gaming", image: "/photo/SPB-COLOR.png" },
    { id: 60, name: "SPB002 Gaming", image: "/photo/SPB002-COLOR.png" },
    { id: 61, name: "SS Gaming", image: "/photo/SS-COLOR.png" },
    { id: 62, name: "SV3 Gaming", image: "/photo/SV3-COLOR.png" },
    { id: 63, name: "TCG SEA Gaming", image: "/photo/TCG_SEA-COLOR.png" },
    { id: 64, name: "TF Gaming", image: "/photo/TF-COLOR.png" },
    { id: 65, name: "TPG Gaming", image: "/photo/TPG-COLOR.png" },
    { id: 66, name: "U9W Gaming", image: "/photo/U9W-COLOR.png" },
    { id: 67, name: "UG2 Gaming", image: "/photo/UG2-COLOR.png" },
    { id: 68, name: "VA Gaming", image: "/photo/VA-COLOR.png" },
    { id: 69, name: "VIA Gaming", image: "/photo/VIA-COLOR.png" },
    { id: 70, name: "WD Gaming", image: "/photo/WD-COLOR.png" },
    { id: 71, name: "YB Gaming", image: "/photo/YB-COLOR.png" },
    { id: 72, name: "YGD Gaming", image: "/photo/YGD-COLOR.png" },
    { id: 73, name: "YL Gaming", image: "/photo/YL-COLOR.png" }
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

