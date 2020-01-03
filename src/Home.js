import React, { Component } from 'react';
// import Products from '../src/MOCK_DATA.json';  
import ProductRow from './ProductRow';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

// import ProductDetails from './ProductDetails';

import './Home.css'; 

class Home extends Component {

    render(){
        return (
            <React.Fragment>
               
                <div className="prod-container flex"> 
                    <SideBar />
                    <div className="list">
                        {this.props.prodList.map(function(product, i){
                            return (
                                < Link key={i} to={`/detail/${product.id}`}>
                                    <ProductRow  item={product} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Home;
