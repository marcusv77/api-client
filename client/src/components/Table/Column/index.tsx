import React from 'react';
import './styles.css';

interface ColumnProps{
  name: string;
}

const ColumnContent = ({name}:ColumnProps) => {
  return (
    <div className="tablecolumn">
      <p>{name}</p>
    </div>
  );
}

export default ColumnContent;
