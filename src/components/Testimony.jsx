/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
import React from 'react';
import '../Style-sheets/Testimony.css'

function Testimony(props) {
  return (
    <div className='Container-Testimony'>
      <img className='photo'
        src={require(`../img/testimony-${props.image}.png`)}
        alt="photo" />
      <div className='Testimony-txt-Container'>
        <p className='Testimony-name'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='Testimony-job'>
          {props.job} at <strong>{props.company}</strong>
        </p>
        <p className='Testimony-txt'>
          "{props.story}"
        </p>
      </div>
    </div>
  );
}

export default Testimony;