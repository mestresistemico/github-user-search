import React from "react"
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './../../../Search/styles.scss'

const Loaders = () => (
    <div className="card-userinfo">
        <ImageLoader />
        <InfoLoader />
    </div>
)

export default Loaders;