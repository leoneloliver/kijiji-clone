import React, { Component } from 'react';
// import Products from '../src/MOCK_DATA.json';  
import ProductRow from './ProductRow';
import { Link } from 'react-router-dom';

// import ProductDetails from './ProductDetails';

import './Home.css'; 

class Home extends Component {

   

    render(){

        
        return (
            <React.Fragment>
                {/* <div>
                    <p>{this.state.prodList.length}</p>
                </div> */}

                {/* < ProductDetails item={this.props.prodList[0]} /> */}
                
                
                

        
                <div className="prod-container flex"> 
                    <div className="sidebar">
                        <ul>
                            <li className="title">Caterories:</li>
                            <li>All Categories</li>
                            <li>Music</li>
                            <li>Smart Phone</li>
                            <li>Computer</li>
                            <li>Eletronics</li>
                        </ul>

                        <ul>
                            <li className="title">Locations:</li>
                            <li>Barrie (171)</li>
                            <li>Belleville Area (32)</li>
                            <li>Brantford (36)</li>
                            <li>Brockville (8)</li>
                            <li>Chatham-Kent (45)</li>
                        </ul>

                        <div className="banner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKfQgv3dvgv4382O7oCodZ9T6M-S6cUsY1Znm4v9VgAIEqxSAc" />
                            <br />
                            <br />
                            <br />
                            <br />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS8oavmQxg88MRWHe_JtzMCUJyfTBEE3GWHTUlMuouup5Eyso5" />
                        </div>
                    </div>
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
