export default function Input() {
    return(
        <div className="body">
            <form className="input">
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
                <button className="input--button">Get a new meme image  🖼</button>
            </form>
        </div>
    )
}