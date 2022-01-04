import Navbar from '../modules/Navbar'
import './Artists.css'
import oglocdance from '../images/oglocdance.gif'
import oglocintro from '../images/oglocintro.gif'
import madddogg from '../images/madd-dogg.jpg'
import madddoggalbum from '../images/madd-dogg-album.jpg'

const ArtistsInfo = () => {
    return (
        <div className="artists-info-container">
            <div className="artists-title-container">
                <p className="artists-title">Our Artists</p>
            </div>


            <div className="artists-description-container">


                <div className="artists-container">
                    <div className="og-loc-container">
                        <div className="artist-name-and-picture">
                            
                            <div className="artist-picture-container">
                                <img className="artist-picture" src={oglocdance} alt="og loc dances at the party"></img>
                                <img className="artist-picture" src={oglocintro}></img>
                            </div>
                        </div>
                        
                        <div class="artist-description-container">
                            <p className="artist-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean dictum ligula hendrerit orci imperdiet, eget varius mi sollicitudin.
                                Donec justo turpis, fermentum id massa non, iaculis finibus est.
                                Mauris luctus ex nec lobortis mollis. Sed nec tortor fringilla, ultricies neque sed, lobortis augue.
                                Donec in felis condimentum, auctor ipsum nec, maximus sem. Duis sodales commodo ipsum quis luctus.
                                Duis in vulputate risus. Donec tempor massa eu eros imperdiet interdum.
                                Aenean dictum ligula hendrerit orci imperdiet, eget varius mi sollicitudin.
                                

                            </p>
                        </div>
                    </div>

                    <div className="madd-dogg-container">
                        <div className="artist-name-and-picture">
                            
                            <div className="artist-picture-container">
                                <img className="artist-picture" src={madddogg} alt="og loc dances at the party"></img>
                                <img className="artist-picture" src={madddoggalbum}></img>
                            </div>
                        </div>
                        
                        <div class="artist-description-container">
                            <p className="artist-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean dictum ligula hendrerit orci imperdiet, eget varius mi sollicitudin.
                                Donec justo turpis, fermentum id massa non, iaculis finibus est.
                                Mauris luctus ex nec lobortis mollis. Sed nec tortor fringilla, ultricies neque sed, lobortis augue.
                                Donec in felis condimentum, auctor ipsum nec, maximus sem. Duis sodales commodo ipsum quis luctus.
                                
                                
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Artists = () => {
    return (
        <div className="artists-page">
            <Navbar />
            <ArtistsInfo />
        </div>
    )
}

export default Artists