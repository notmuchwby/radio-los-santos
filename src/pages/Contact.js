import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import map from '../images/rls-headquarters.png'
import downtown from '../images/downtown2.jpg'
import './Contact.css'

const Info = () => {
    return (
        <div class="title-and-info-container">
            <div className="address-name-container">
                <p className="address-name">
                    Contact Us
                </p>
            </div>

            <div className='info-container'>
                <div class="info-address-container">
                    <p className="phone-number" id="info-text">Office phone: 187-999-1068</p>
                    <p className= "julio-g-phone-number" id="info-text">Julio G: 187-241-3312</p>
                    <p className="address" id="info-text">Location: Downtown Los Santos, <br/> West Vinewood 38, 4th floor</p>
                    <div className="location-pictures">
                        <img className="map" src={map} alt="radio los santos headquarters on the map"/>
                        <img className="downtown-pic" src={downtown} alt="down town buildings in los santos"></img>
                    </div>
                    <p class="radio" id="info-text">Radio Los Santos Headquarters <br/> </p>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div className="contactpage">
            <Navbar />
            <Info />
        </div>
    )
}

export default Contact