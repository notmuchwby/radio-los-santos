import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import './Artists.css'
import MaddDoggAlbum from '../images/madd-dogg-album.jpg'
import MaddDoggAlbumCover1 from '../images/mdas/mda1.jpg'
import MaddDoggAlbumCover2 from '../images/mdas/mda2.jpg'
import MaddDoggAlbumCover3 from '../images/mdas/mda3.jpg'
import MaddDoggAlbumCover4 from '../images/mdas/mda4.jpg'
import MaddDoggAlbumCover5 from '../images/mdas/mda5.png'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

const ArtistsInfo = () => {
    return (
        <div className="artists-info-container">
            <div className="artists-title-container">
                <p className="artists-title">Our Artists</p>
            </div>

            <ImageSlider slides={SliderData}/>

            <div className="artists-text-container">
                <p className="artists-first-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum non nisi et ante consequat elementum.
                    Vestibulum eget ipsum vel diam auctor rutrum id ut tellus.
                    Curabitur in massa non felis pretium elementum eu et arcu.
                    Cras mattis dui tincidunt justo molestie aliquam. Curabitur
                    facilisis porttitor volutpat. Vivamus purus nunc, feugiat sit amet mi in,
                    porttitor posuere nisi. Vivamus finibus interdum metus, sit amet 
                    ultrices erat lobortis molestie. Etiam id ante a massa molestie 
                    sagittis vel sed eros. Nullam tincidunt efficitur erat pretium venenatis. 
                    Suspendisse hendrerit nibh sapien, a blandit arcu fermentum in.
                </p>

                <p className="artists-second-text">
                    In hac habitasse platea dictumst. Cras congue posuere lorem non porta. 
                    Sed sapien lacus, consectetur in congue id, bibendum eu felis. 
                    Ut congue vestibulum tellus quis convallis.
                    Curabitur rutrum mollis purus id malesuada. Curabitur posuere sem nec gravida consectetur. 
                    Vivamus imperdiet dictum felis nec volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam non felis ante.

                    Praesent semper tempus ex. Suspendisse iaculis varius risus et dapibus. 
                    Aenean posuere velit vel leo pellentesque mollis. 
                    Sed tempor risus quis massa interdum, sollicitudin malesuada orci feugiat. 
                    Nullam tincidunt congue erat, non dictum nunc tempus sed. 
                    Donec commodo mauris lorem, et mattis felis congue eu.
                    Duis feugiat tristique mi eget egestas. 
                    Phasellus lobortis mi nisi, ac ultrices risus pretium consectetur.
                    Praesent viverra convallis purus sit amet rhoncus.
                </p>
            </div>

            <div className="madd-dogg-album-container">
                <p className="artists-title">Madd Dogg's Discography</p>            
                <div className="madd-doggs-discography-container">
                    <img className="madd-doggs-album" src={MaddDoggAlbumCover1}></img>
                    <img className="madd-doggs-album" src={MaddDoggAlbumCover2}></img>
                    <img className="madd-doggs-album" src={MaddDoggAlbumCover3}></img>
                    <img className="madd-doggs-album" src={MaddDoggAlbumCover4}></img>
                    <img className="madd-doggs-album" src={MaddDoggAlbumCover5}></img>
                </div>

                <div className="madd-dogg-text-container">
                    <p className="madd-dogg-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi et ante consequat elementum.
                        Vestibulum eget ipsum vel diam auctor rutrum id ut tellus. 
                        Curabitur in massa non felis pretium elementum eu et arcu.
                        Cras mattis dui tincidunt justo molestie aliquam. 
                        Curabitur facilisis porttitor volutpat. 
                        Vivamus purus nunc, feugiat sit amet mi in, porttitor posuere nisi. 
                        Vivamus finibus interdum metus, sit amet ultrices erat lobortis molestie. 
                        Etiam id ante a massa molestie sagittis vel sed eros. 
                        Nullam tincidunt efficitur erat pretium venenatis. 
                        Suspendisse hendrerit nibh sapien, a blandit arcu fermentum in.
                    </p>
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