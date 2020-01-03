import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import SearchBar from './SearchBar';

import Products from '../src/MOCK_DATA.json';  


class App extends Component{


  constructor(props){
    super(props);
    this.state = {
        prodList: [],
    }
  }

  componentDidMount(){
    this.setState({prodList: Products})
  }


  filterNames(e){
  
    if(e.target.value.length > 0){
      this.setState({prodList: this.state.prodList.filter((item) => item.product_name.toLowerCase().includes(e.target.value.toLowerCase()))});
    }else{
      this.setState({prodList:Products });

    }
   
  }


  render(){
    const {prodList} = this.state;
    return(
      <BrowserRouter>
        <Fragment>

      
          <SearchBar searchFunc={(e) => this.filterNames(e)}/>

         
          <Route exact path="/detail/:id" component={() => (
            < ProductDetails prodList={this.state.prodList} />
          )} />
          
          
          <Route exact path="/" component={() => (
            < Home prodList={prodList} />
          )}
          />

        </Fragment>
      </BrowserRouter>
    
    )
  }
}

export default App;
