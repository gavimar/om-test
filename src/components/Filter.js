import React from 'react';

const Filter = (props) => {


  const updateNumberValue = (evt) => {
    props.handleNumberValue(evt.currentTarget.value)
  }

  return (
    <form>
      <label htmlFor="abv">Search by abv</label>
      <input type="number" id="abv" value ={props.numberValue} onChange={updateNumberValue}/>
    </form>
  );
};

export default Filter;