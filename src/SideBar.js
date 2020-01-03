import React, { Component } from 'react';
import banner01 from '../src/banner1.jpeg';
import banner02 from '../src/banner2.jpeg';

class SideBar extends Component {

    render() {
        return (
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
                    <img src={banner02} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src={banner01} />
                </div>
            </div>
        )
    }
}
export default SideBar;

