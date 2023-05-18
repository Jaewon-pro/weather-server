import './navbar.css';

import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav role="navigation">
            <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
                <ul id="menu">
                <Link href="/"><li>Home</li></Link>
                <Link href="about"><li>About</li></Link>
                <Link href="weather-info"><li>Temperature</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
