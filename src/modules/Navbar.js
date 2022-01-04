import './Navbar.css'

const Navbar = () => {
    return (
        <ul>
            <div className="navbar-container">
                <li><a href="/contact">Contact</a></li>
                <li><a href="/artists">Artists</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">Home</a></li>
            </div>

            <div>
                 <li className="title"><a href="/">Since 1988</a></li>
            </div>
        </ul>           
    )
}

export default Navbar