import React, { Component } from 'react'

export default class GlassesItem extends Component {
    render() {
        let {glasses} = this.props.newglasses

        return (
            <div>
            <div className="row ">
                        <div className="col-6 
                        text-center model-item">
                            <img classname="model-face img-fluid rounded mx-auto d-block " src="./glassesImage/model.jpg" alt="" />
                            <img className="model-glasses" src={glasses.url} alt="" />
                            <p className="model-info">
                                <div className="model-name">{glasses.name}</div>
                                <div className="model-detail">{glasses.desc}
                                </div>
                            </p>
                        </div>
                        <div className="col-6
                        text-center model-item">
                            <img classname="model-face" src="./glassesImage/model.jpg" alt="" />
                        </div>
                    </div>
        </div>
        )
    }
}
