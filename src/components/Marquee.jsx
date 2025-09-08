import './Marquee.css';

const Marquee = () => {
  return (
    <div>
      {/* Marquee chạy từ phải sang trái */}
      <div className="marquee">
        <div className="marquee-content left">
          <span>
            REFER A FRIEND 🎁 WIN A HUGE BONUS! 🎉 SUPER MEMBER DAY – APPRECIATION BONUS ON THE 25TH OF EVERY MONTH 🎁 REFER A FRIEND 🎁
          </span>
          <span>
            REFER A FRIEND 🎁 WIN A HUGE BONUS! 🎉 SUPER MEMBER DAY – APPRECIATION BONUS ON THE 25TH OF EVERY MONTH 🎁 REFER A FRIEND 🎁
          </span>
        </div>
      </div>

      {/* Marquee chạy từ trái sang phải */}
      <div className="marquee">
        <div className="marquee-content right">
          <span>
            REFER A FRIEND 🎁 WIN A HUGE BONUS! 🎉 SUPER MEMBER DAY – APPRECIATION BONUS ON THE 25TH OF EVERY MONTH 🎁 REFER A FRIEND 🎁
          </span>
          <span>
            REFER A FRIEND 🎁 WIN A HUGE BONUS! 🎉 SUPER MEMBER DAY – APPRECIATION BONUS ON THE 25TH OF EVERY MONTH 🎁 REFER A FRIEND 🎁
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
