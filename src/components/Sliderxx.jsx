import "./Sliderxx.css";

const Sliderxx = () => {
  const items = [
    { id: 1, title: "STARBURST 1", img: "./photo/2.png" },
    { id: 2, title: "STARBURST 2", img: "./photo/3.png" },
    { id: 3, title: "STARBURST 3", img: "./photo/4.png" },
    { id: 4, title: "STARBURST 4", img: "./photo/5.png" },
    { id: 5, title: "STARBURST 5", img: "./photo/6.png" },
    { id: 6, title: "STARBURST 6", img: "./photo/7.png" },
    { id: 7, title: "STARBURST 7", img: "./photo/8.png" },
    { id: 8, title: "STARBURST 8", img: "./photo/9.png" },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>🎲 Live Dealer & Game Show Titles</h2>
        <a href="#" className="view-all">
          VIEW ALL ↗
        </a>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {items.concat(items).map((item, index) => (
            <div key={index} className="slider-item">
              <img src={item.img} alt={item.title} />
              <div className="slider-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliderxx;
