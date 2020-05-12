import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/fetchData';
import BeerList from './BeerList';
import Filter from './Filter';


class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.applyFilters = this.applyFilters.bind(this);
    this.handleNumberValue = this.handleNumberValue.bind(this);
    
    this.state = {
      data: [],
      numberValue:''
    }
  }

  
  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data
        })
      });
    
     
    console.log(this.state) 
  }


  handleNumberValue(inputValue){
    this.setState({
      numberValue : inputValue
    })
  }

  applyFilters(){
    const {data, numberValue} = this.state
    return data
    .filter (BeerObj => numberValue === "" || BeerObj.abv === parseInt(numberValue) )
  }

 

  render() {
    const {numberValue} = this.state;
    return (
      <div className="wrapper">
        
          <header className = "header">
            <h1>Beer Finder</h1>
            <Filter 
              numberValue ={numberValue}
              handleNumberValue={this.handleNumberValue}/>
            </header>
              <main className="main">
                <BeerList 
                  dataList = {this.applyFilters()}/>
            </main>
          
      </div>
    );
  }
}

export default App;