import React, { Component } from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'
import logo from './logo.svg';
import './Simple.css'
class SimpleCard extends Component{
    render(){
        return(
            <div className='simpl'>
                <Image image={logo}/>
                <div className='hd'>
                    <Title name="REACT"/>
                    <Description desc="React is too amazing"/>
                </div>
                

            </div>
        )
    }
}
export default SimpleCard