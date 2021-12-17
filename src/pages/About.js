import randompic from '../images/ballas.jpg'
import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import './About.css'


const AboutInfo = () => {
    return (
        <div className="about-info-container">
            <div className="about-title-container">
                <p className="about-title">About Us</p>
            </div>

            <div className="slide-show-and-text-container">
                <div className="slide-show-container">
                    <img className="slide-show" src={randompic}/>
                </div>

                <div className="about-text-container">
                    <p className="about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend diam in ex porttitor dictum. 
                        Integer fringilla porta ligula, in fermentum sem euismod eget. 
                        Nunc non maximus sapien, ac dictum enim. In ac libero venenatis, commodo sem sed, rutrum risus.
                        Etiam aliquet iaculis tortor condimentum accumsan. Phasellus eleifend imperdiet tristique.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend diam in ex porttitor dictum. 
                        Integer fringilla porta ligula, in fermentum sem euismod eget. 
                        Nunc non maximus sapien, ac dictum enim. In ac libero venenatis, commodo sem sed, rutrum risus.
                        Etiam aliquet iaculis tortor condimentum accumsan. Phasellus eleifend imperdiet tristique.
                        
                    </p>
                </div>  
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className="aboutpage">
            <Navbar />
            <AboutInfo />
            <Footer />
        </div>
    )
}

export default About
