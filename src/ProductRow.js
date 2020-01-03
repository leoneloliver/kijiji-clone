import React, { Component } from 'react';
import image from './csa.png';

class ProductRow extends Component {

    render() {
        return (
            <div className="item">
                <div className="image">
                    {/* <img src={this.props.item.photo} className="pic"/> */}
                    <img src={image} className="pic"/>
                    <div className="heart">&hearts;</div>
                </div>
                <div className="prod_desc">
                    <div className="flex">
                        <div className="prod_title">{this.props.item.product_name}</div>
                    </div>
                    <div className="user">Posted by: | {this.props.item.user} </div>
                    <div className="prod_full">{this.props.item.product_desc}</div>
                </div>
                <div className="prod_price">{this.props.item.price}</div>
            </div>
        )
    }
}
export default ProductRow;

