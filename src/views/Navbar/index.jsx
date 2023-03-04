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

            <menu>
                <li>
                    <button>S</button>
                </li>

                <li>
                    <button>N</button>
                </li>

                <li>
                    <button>M</button>
                </li>

                <li>
                    <button>
                        P
                    </button>
                </li>
            </menu>
        </nav>
    }
}