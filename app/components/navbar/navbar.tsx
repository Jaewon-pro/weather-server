import './navbar.css';

import Link from 'next/link';

export default function NavBar() {
  return (
      <nav role="navigation">
          <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
              <ul id="menu">
              <Link href="home"><li>Home</li></Link>
              <Link href="about"><li>About</li></Link>
              <Link href="weather-info"><li>Temperature</li></Link>
              </ul>
          </div>
      </nav>
  );
}
