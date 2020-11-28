import React from 'react';
import Column from '../Column';
import './styles.css';

const LineContent = () => {

  return (
    <div className="line">
      <div className="tableline">
        <Column />
        <Column />
        <Column />
      </div>
      <div className="icons">
        <a>I</a>
        <a>X</a>
      </div>
    </div>
  );
}

export default LineContent;
