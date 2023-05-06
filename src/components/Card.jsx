import React from 'react';

function Card({ data }) {
  return (
    <div className='card'>
      <img className='img' src={data.picture.medium} alt='' />

      <div className='details'>
        <p>
          Name:- {`${data.name.title}. ${data.name.first} ${data.name.last}`}
        </p>
        <p>Email:- {`${data.email}`}</p>
        <p>Country:- {`${data.location.country}`}</p>
      </div>
    </div>
  );
}

export default Card;
