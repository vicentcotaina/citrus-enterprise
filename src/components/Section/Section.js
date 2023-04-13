import React from 'react';
import './Section.css';

function Section({
  lightBg,
  lightText,
  headline,
  lightTextDesc,
  description,
  imgStart,
  img,
  alt,
}) {
  return (
    <>
      <div className={lightBg ? 'section' : 'section darkBg'}>
        <div
          className="row"
          style={{
            display: 'flex',
            flexDirection: imgStart ? 'row-reverse' : 'row',
          }}
        >
          <div className="text-wrapper">
            <h1 className={lightText ? 'heading' : 'heading dark'}>
              {headline}
            </h1>
            <p className={lightTextDesc ? 'subtitle' : 'subtitle dark'}>
              {description}
            </p>
          </div>
          <div className="img-wrapper">
            <img src={img} alt={alt} className="img"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
