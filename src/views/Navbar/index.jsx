import React from "react";
import './index.css';



export default class Navbar extends React.Component {
    render(){
        return <nav>
            <div className="logoBrand">Garlic</div>

            <menu>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV shows</a></li>
                <li><a href="#">Animations</a></li>
                <li><a href="#">Plans</a></li>
            </menu>

            <menu className="profile">
                <li>
                    <button><i className="fa fa-search"></i></button>
                </li>

                <li>
                    <button><i className="fa fa-bell"></i></button>
                </li>

                <li>
                    <button>M</button>
                </li>

                <li>
                    <button>
                        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="" />
                    </button>
                </li>
            </menu>
        </nav>
    }
}