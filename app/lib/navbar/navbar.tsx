import './navbar.css';

import Link from 'next/link';

export default function MainMenu() {
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
                {/* <a href="#"><li>Contact</li></a> */}
                </ul>
            </div>
        </nav>
    );
}