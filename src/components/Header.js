import logoImage from '../../static/food-logo.jpg'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                {/* Use the imported image */}
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};
// export default Header;