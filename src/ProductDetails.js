import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import image from './csa.png';

class ProductDetails extends Component{
    
    render(){
        const prodId = this.props.match.params.id;
        const product = this.props.prodList.filter(item =>{
            return item.id === prodId;
        })[0]
        return(
            <React.Fragment>

                <div className="prod-container flex detail">
                    <div className="detail-content">
                        <h3>{product.product_name}</h3>
                        <div className="price">{product.price}</div>
                        <div className="flex box-img">
                            <div className="main-image">
                                <img src={image} />
                            </div>
                            <div className="more-images">
                                <img src={image} />
                                <img src={image} />
                                <img src={image} />
                            </div>
                        </div>
                        <div>
                            <h4 className="title-desc">Description</h4>
                            <p className="paragraph-desc">{product.product_desc}</p>
                        </div>
                    </div>
                    <div className="detail-sidebar text-center">

                
                        <div className="user user-detail">
                            N Queen St, Etobicoke, ON M9C 1A7, Canada
                        </div>
                        <div className="side-block">
                            <div className="user">
                                Posted by: {product.user} <img src={product.photo} />
                            </div>
                        
                        </div>
                        <div className="side-block">
                            <h4 className="title-contact">Contact Secure Container</h4>
                            <textarea className="textarea" rows="4" placeholder="Hi, I'm interested! Please contact me if this is still available."></textarea>
                            <button className="btn-send">Send</button>
                        </div>
                    </div>
                    
                </div>
                
            </React.Fragment>
            
            
        )
    }

}
export default withRouter(ProductDetails);