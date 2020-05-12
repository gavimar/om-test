import React from 'react';
import Beer from './Beer';



const BeerList = (props) => {
  console.log(props.inputValue)
  const {dataList} = props;
  
  return (
    <div>
      {/* {foundBeer} */}
    <ul className="Beer-list">
      {dataList.map(BeerObj =>
          <li key={BeerObj.id}>
            
              <Beer
                description={BeerObj.description}
                name={BeerObj.name}
                
              />
            
          </li>
        )}
    </ul>
    </div>
  )
}

export default BeerList;