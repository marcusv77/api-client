import React from 'react';
import {useHistory} from 'react-router-dom';
import {Edit, Remove} from '../../global'
import Column from '../Column';
import './styles.css';

const LineContent = () => {

  const history = useHistory();

  function handleView(){
    history.push('/client');
  }

  function handleEdit(){
    history.push('/client');
  }

  function handleDelete(){
  }

  return (
    <div className="line">
      <a onClick={handleView} className="tableline">
        <Column name="Teste" />
        <Column name="Teste" className="hide" />
        <Column name="Teste" className="hide" />
      </a>
      <div className="icons">
        <a onClick={handleEdit}><Edit /></a>
        <a onClick={handleDelete}><Remove /></a>
      </div>
    </div>
  );
}

export default LineContent;
