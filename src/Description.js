import React, { Component } from 'react';
class Description extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='cript'>
            <h3>{this.props.desc}</h3>
            </div>
        )
    }
}
export default Description