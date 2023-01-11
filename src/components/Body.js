import memesData from '../memesData.js'
import React from 'react'

export default function Input() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image:"http://i.imgflip.com/1bij.jpg"
    })

    let memeURL
    const memesArray = memesData.data
    
    function getMeme() {
        const number= Math.floor(Math.random() * memesArray.length);
        memeURL = memesArray[number].url
        setMeme(prevMeme => ({
            ...prevMeme,
            image : memeURL
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    console.log(meme)

    return(
        <div className="body">
            <div className="input">
                <input
                    className="input--field" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className="input--field" 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMeme} className="input--button">Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme--image" alt=''/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}