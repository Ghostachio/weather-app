import React from 'react';
import "./App.css";
import Search from './Search';
import Temp from './Temp';
import Infos from './Infos';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data : [],
      searchField : "",
    }
   
    
    
  }

  Search = (e) => {
    this.setState ({searchField : e.target.value})
}

  gettingData = (e) =>{
    const apiKey = "b099b0a33239890f3def00176432d87a";
    if (e.key === 'Enter'){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchField}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(datas => this.setState({data : datas}));
    }
  }
  
render(){
  return (
        <div className='flex justify-center align-middle flex-col' >
          <Search data={this.gettingData} searching={this.Search}/>
          <Temp temperature = {this.state.data}/>
          <Infos others = {this.state.data}/>
        </div>
    );
  }
}


export default App;
