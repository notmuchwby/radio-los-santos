import './Navbar.css'

const Navbar = () => {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li className="title">Since 1988</li>
        </ul>           
    )
}

export default Navbar