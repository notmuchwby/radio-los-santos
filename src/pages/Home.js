import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import './Home.css'
import logo from '../images/radio-logo.png'

const Logo = () => {   
    const radioLink = (e) => {    
        e.preventDefault()
        window.open('https://youtu.be/dQw4w9WgXcQ', '_blank')     
    }

    return (
        <div className="image-container">
            <img src={logo} alt="rls icon" onClick={radioLink}/>
        </div>
    )
}

const WelcomeText = () => {
    const radioLink = (e) => {    
        e.preventDefault()
        window.open('https://youtu.be/nSy7wpevIsY', '_blank')     
    }

    return (
        <div>
            <div className="welcome-text-container">
                <p className="welcome-text">
                    Home of gangster rap and gangster bitches
                </p>
            </div>

            <div className="introduction-text-container">
                <p className="introduction-text">
                    Check it out. It's your man Julio G broadcasting <br/> live across Los Santos and the whole San Andreas.<br/> 
                    Of course we're bringing you the best <br/> in the West Coast hip hop and all the newest cuts.<br/> 
                    So y'all sit tight, don't touch the dial. <br/>
                </p>
                <p className="julio-g">Julio G</p>
            </div>

            <div className="learn-more-button-container">
                <button className="learn-more-button" onClick={radioLink}>
                    Listen
                </button>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Logo />
            <WelcomeText />
        </div>
    )
}

export default Home 