import React, { Component } from 'react'
import GlassesItem from './GlassesItem'
import GlassesList from './GlassesList'
import Header from './Header'

export default class BaiTapGlasses extends Component {
    state={
        glasses: {}
    }
    changeGlasses = (newglasses) => {
        this.setState({
            glasses: newglasses
        })
    }
    render() {
        return (
            <div>
                <img src="./glassesImage/background.jpg" alt="" className="background-img" />
                <div className="body">
                    <Header/>
                    <div className="container py-5 content">
                        <GlassesItem newglasses={this.state}/>
                        <GlassesList changeGlasses={this.changeGlasses} />
                    </div>

                </div>

            </div>
        )
    }
}
