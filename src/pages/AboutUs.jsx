import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AboutUs.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'About Us | JeetBuzzGames – Your Premier Gaming Destination';
    updateOrCreateMeta(
      'description',
      'Learn about JeetBuzzGames - your premier destination for online gaming. Discover our mission, values, and commitment to providing the best gaming experience.'
    );
    updateOrCreateMeta(
      'keywords',
      'About Us, JeetBuzzGames, Gaming Platform, Online Casino, Mission, Values, Gaming Experience'
    );
  }, []);

  return (
    <div className="about-us-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="about-us-header">About Us</h1>
      </div>
      
      <div className="about-us-content">
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">Hiểu</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Bạn muốn tôi thay đổi layout của title header trong tất cả 6 slider để:
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <div className="feature-text">
                  <strong>Title header (tiêu đề)</strong> nằm ở bên trái
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔗</div>
                <div className="feature-text">
                  <strong>"VIEW ALL"</strong> nằm ở bên phải
                </div>
              </div>
            </div>
            
            <p className="description-text">
              Tôi sẽ cần chỉnh sửa CSS của các slider để đảm bảo:
            </p>
            
            <div className="requirements-list">
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span>Title header (h2) được căn trái</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span>Link "VIEW ALL" được căn phải</span>
              </div>
            </div>
            
            <p className="scope-text">
              Layout này áp dụng cho tất cả 6 slider: <strong>Banner, Marquee, Container, Dom, Publisher, và Hot Games</strong>
            </p>
            
            <div className="confirmation-box">
              <p className="confirmation-text">
                <strong>Đúng không ạ?</strong> Hãy CSS cho đẹp nhé, màu chủ đạo là màu vàng nhé, gradient và tráng gương càng tốt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
