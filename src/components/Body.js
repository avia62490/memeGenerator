import memesData from '../memesData.js'
import React from 'react'

export default function Input() {
    const [meme, setMeme] = React.useState("")
    let memeURL
    const memesArray = memesData.data
    function getMeme() {
        const number= Math.floor(Math.random() * memesArray.length);
        memeURL = memesArray[number].url
        setMeme(memeURL)
        console.log(`getting meme ${memeURL}`)
    }

    return(
        <div className="body">
            <div className="input">
                <input
                    className="input--field" 
                    type="text" 
                    placeholder="Top text"
                />
                <input
                    className="input--field" 
                    type="text" 
                    placeholder="Bottom text"
                />
                <button onClick={getMeme} className="input--button">Get a new meme image  🖼</button>
            </div>
            <img src={meme} alt=''className='meme'/>
        </div>
    )
}