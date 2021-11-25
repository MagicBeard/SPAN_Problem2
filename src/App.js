import React, {useState} from 'react'
import ImageList from './components/ImageList'
import axios from 'axios'
import './components/styles.css'

const App = () => {
    
    const [pictures,setPictures] = useState({
        data: '',
        
    })    

    const handleClick  = async(name) => {
        
        const data = await axios.get('https://api.unsplash.com/search/photos', {
                     params: {query: name},
                     headers: {Authorization: 'Client-ID v2fEICoN60I65AabhRYNGAh-MUiwEdUWLbApi402ykw'}            
        })
        
        setPictures({
            data: data,
            
        })       
    }
          
    return (
        <div>
            <h2 className="heading">Categories:</h2>

            <div className= "btnsAndImages">          

                <div className ="btnCollective">
                    <button className= "btn" onClick = {() => handleClick('Animation')} >Animation</button>
                    <button className= "btn" onClick = {() => handleClick('Cartoon')} >Cartoon</button>
                    <button className= "btn" onClick = {() => handleClick('Character Design')} >Character Design</button>
                    <button className= "btn" onClick = {() => handleClick('Comedy')} >Comedy</button>
                    <button className= "btn" onClick = {() => handleClick('Design')} >Design</button>
                    <button className= "btn" onClick = {() => handleClick('DJing')} >DJing</button>
                    <button className= "btn" onClick = {() => handleClick('Engineering')} >Engineering</button>
                    <button className= "btn" onClick = {() => handleClick('Cars')} >Cars</button>
                </div>

                <div>
                    <ImageList foundImages={pictures.data} />                    
                </div>

            </div>         

        </div>
    )
}

export default App;