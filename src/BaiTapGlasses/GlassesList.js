import React, { Component } from 'react'
import DataGlasses from './dataGlasses.json'

export default class GlassesList extends Component {
    renderGlassesList = () => {
        return DataGlasses.map((newglasses,index) => {
            return(
                <img src={newglasses.url} alt="" key={index} onClick={() => {
                    this.props.changeGlasses(newglasses)
                }}/>
            )
        })
    }
    
    render() {
        return (
            <div className="glasses-list bg-light container text-center mt-5 d-flex justify-content-center p-5"> 
                {this.renderGlassesList()}
            </div>
        )
    }
}
