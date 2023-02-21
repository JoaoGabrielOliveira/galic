import React from 'react';
import './index.css';

export default class Chip extends React.Component {
    render(){
        return <div className='chip'>
            {this.props.children}
        </div>
    }
}