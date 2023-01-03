import trollFace from '../trollFace.svg'

export default function Header() {
    return (
        <nav className='header'>
            <img src={trollFace} className='header--logo' alt='' />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--description'>React Course - Project 3</h4>
        </nav>
    )
}