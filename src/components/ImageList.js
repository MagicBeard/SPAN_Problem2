import React from 'react'
import './styles.css'

const ImageList = (props) => {

    let imgs = '';

    if (props.foundImages){
        imgs = props.foundImages.data.results.map(img => {
            return <img className = "img" key={img.id} src={img.urls.regular} alt={img.alt_description} />
        })
    }     
    
    return (
        <div className = "images">

            <div>
            {imgs[0]}
            {imgs[1]}
            {imgs[2]}
            {imgs[3]}
            {imgs[4]}
            </div>

            <div>
            {imgs[5]}
            {imgs[6]}
            {imgs[7]}
            {imgs[8]}
            {imgs[9]}
            </div>
        </div>
    )
}

export default ImageList
