import logo from '../images/radio-logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className="image-container">
            <img src={logo} alt="rls icon" onClick={radioLink}/>
        </div>
    )
}

const radioLink = (e) => {    
    e.preventDefault()
    window.open('https://youtu.be/dQw4w9WgXcQ', '_blank')     
}


export default Logo