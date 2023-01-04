import memes from '../memesData.js'

export default function Input() {
    function getMeme() {
        const number= Math.floor(Math.random() * 100);
        console.log(memes.data[number].name)
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
        </div>
    )
}