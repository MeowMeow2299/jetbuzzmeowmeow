import React, { useState, useRef } from "react";
import "./Info.css";

const Info = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('modal-header')) {
      setIsDragging(true);
      const rect = modalRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const modal = modalRef.current;
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;
      
      // Giới hạn modal trong viewport
      const maxX = window.innerWidth - modal.offsetWidth;
      const maxY = window.innerHeight - modal.offsetHeight;
      
      modal.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
      modal.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  const promotions = [
    "৪ টি প্রধান এজেন্ট রিবেট...",
    "ফ্রি স্পিন, ৮৫,০০০,০০০",
    "প্রতি শনিবার রহস্যময় পু...",
    "সুপার সদস্য দিবস প্রতি...",
    "ইলেকট্রনিক রযাঙ্কিং টুর্না...",
    "নতুন সদস্যদরে পুরষ্কার",
    "৪ দিনের সাইন-ইন লাকি"
  ];

  return (
    <div className="info-overlay">
      <div 
        ref={modalRef}
        className="info-modal"
        onMouseDown={handleMouseDown}
      >
        <div className="modal-header">
          <div className="modal-title">
            <h2>Announcement</h2>
            <p>৪ টি প্রধান এজেন্ট রিবেট বোনাস</p>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          <div className="promotions-sidebar">
            {promotions.map((promo, index) => (
              <div key={index} className="promo-item">
                {promo}
              </div>
            ))}
          </div>

          <div className="main-announcement">
            <div className="announcement-illustration">
              <div className="rabbit-character">
                <div className="rabbit-body"></div>
                <div className="rabbit-head"></div>
                <div className="rabbit-ears"></div>
                <div className="rabbit-eyes"></div>
                <div className="rabbit-nose"></div>
                <div className="rabbit-mouth"></div>
                <div className="rabbit-bow-tie"></div>
                <div className="rabbit-sunglasses"></div>
                <div className="rabbit-arm"></div>
              </div>
              <div className="slot-elements">
                <div className="slot-machine">
                  <div className="slot-reel">7</div>
                </div>
                <div className="safe-vault">
                  <div className="safe-door">7</div>
                </div>
              </div>
              <div className="gold-coins">
                <div className="coin coin-1"></div>
                <div className="coin coin-2"></div>
                <div className="coin coin-3"></div>
                <div className="coin coin-4"></div>
                <div className="coin coin-5"></div>
                <div className="coin coin-6"></div>
              </div>
            </div>

            <div className="bonus-section">
              <h3>৪টি প্রধান এজেন্ট বোনাস</h3>
              <div className="bonus-cards">
                <div className="bonus-card">
                  <span>রেফারেল বোনাস: ২৮৮ + ১১৮</span>
                </div>
                <div className="bonus-card">
                  <span>রিচার্জ বোনাস: ২.৫০%</span>
                </div>
                <div className="bonus-card">
                  <span>সদস্য বেট বোনাস : ০.৬৪%</span>
                </div>
                <div className="bonus-card">
                  <span>অর্জিত বোনাস: ৮১৬,০০০,০০০</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
