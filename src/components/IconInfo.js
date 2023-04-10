import React from 'react';

function IconInfo({ icon, text }) {
  return (
    <>
      <div className="icon-info-item">
        <div className="icon-info-icon">
          <i className={icon}></i>
        </div>
        <div className="icon-info-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default IconInfo;
