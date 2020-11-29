import React from 'react';
import './styles.css';

interface ColumnProps{
  name: string;
  className?: string;
}

const ColumnContent = ({name, className}:ColumnProps) => {
  return (
    <div className={"tablecolumn " + className}>
      <p>{name}</p>
    </div>
  );
}

export default ColumnContent;
