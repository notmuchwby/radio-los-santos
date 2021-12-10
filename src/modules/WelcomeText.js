import './WelcomeText.css'

const WelcomeText = () => {
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
                <button className="learn-more-button">
                    Learn More
                </button>
            </div>
        </div>
    )
}   

export default WelcomeText 