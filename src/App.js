import React, {useState, useEffect} from 'react'
import ImageList from './components/ImageList'
import axios from 'axios'
import './components/styles.css'

const App = () => {
    
    const [pictures,setPictures] = useState({data: '',})
    
    const [topics, setTopic] = useState('');

    useEffect(async () => {
        
            const result = await axios.get('https://api.unsplash.com/topics', {        
                headers: {Authorization: 'Client-ID v2fEICoN60I65AabhRYNGAh-MUiwEdUWLbApi402ykw'}
            })

            setTopic(result.data);
                
    }, []);

    const handleClick  = async(name) => {
        
        const data = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: name},
            headers: {Authorization: 'Client-ID v2fEICoN60I65AabhRYNGAh-MUiwEdUWLbApi402ykw'}            
        })
        
        setPictures({data: data,})       
    }
          
    return (
        <div>
            <h2 className="heading">Categories:</h2>
            <div className= "btnsAndImages">

                {topics !== '' &&          

                <div className ="btnCollective">

                    {topics.map(topic => (
                    <button className= "btn" onClick = {() => handleClick(topic.title)} >{topic.title}</button>
                    ))}
                    
                </div>
                }

                <div>
                    <ImageList foundImages={pictures.data} /> 
                </div>
            </div>         
        </div>
    )
}

export default App;