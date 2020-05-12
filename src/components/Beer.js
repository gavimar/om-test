import React from 'react';

const Beer = (props) => {

  return (
    <div className='beer'>
      
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default Beer;