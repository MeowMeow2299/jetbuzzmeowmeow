import './Container.css';

const Container = ({ onOpenInfo }) => {
  return (
    <div className="container">
      <img src="/photo/1.png" alt="Banner" className="container-img" />
      
      {/* Nút test modal - hiện rõ ràng */}
      <button 
        onClick={onOpenInfo}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#FFD700',
          color: '#000',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          fontSize: '18px'
        }}
      >
        📢 CLICK HERE - ANNOUNCEMENT
      </button>
    </div>
  );
};

export default Container;






