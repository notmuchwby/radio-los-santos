import './Home.css'
import logo from '../images/radio-logo.png'

const Navbar = () => {
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li ><a className="active" href="#about">About</a></li>
            <li className="title">Since 1988</li>
        </ul>           
    )
}

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

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="footer-text">
                Made by notmuchwby. All rights belong to Rockstar Games.
            </p>
        </div>
    )
}

const Home = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Logo />
            <WelcomeText />
            <Footer />
        </div>
    )
}

export default Home 