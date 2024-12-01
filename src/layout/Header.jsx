import { useState } from 'react';
import BinkLogo from '../assets/images/bink_logo.svg';
import '../index.css';

function Header() {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow(!show);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <header className="fixed w-full top-0 z-20 header">
      <nav className="flex items-center justify-between py-2 px-2 relative w-full">
        <a href="/me" className="ml-4 md:ml-8">
          <div className="flex items-center">
            <img src={BinkLogo} width={48} height={48} alt="Club Bink Logo" />
          </div>
        </a>
        <div
          role="button"
          aria-hidden="true"
          className="menu-icon h-8 w-8 md:hidden mr-4 relative"
          onClick={showMenu}
        >
          <div className="hamburger-icon absolute h-8 w-8 left-0 top-4 flex flex-col items-center">
            <div className={`hamburger-element ${!show ? '-translate-y-3' : 'rotate-[40deg]'}`} />
            <div className={`hamburger-element ${!show ? '' : 'opacity-0'}`} />
            <div className={`hamburger-element ${!show ? 'translate-y-3' : '-rotate-[40deg]'}`} />
          </div>
        </div>
        <ul className="hidden md:flex text-xl">
          <li className="mx-8">
            <a href="#about" className="hover:drop-shadow-3xl">About</a>
          </li>
          <li className="mx-8">
            <a href="#experience" className="hover:drop-shadow-3xl">Problems</a>
          </li>
          <li className="mx-8">
            <a href="#work" className="hover:drop-shadow-3xl">Proposals</a>
          </li>
          <li className="mx-8">
            <a href="#contact" className="hover:drop-shadow-3xl">Tools</a>
          </li>
        </ul>
        <div className="purple-gradient w-full h-0.5 absolute bottom-0 left-0" />

        <nav className={`absolute w-full h-screen bg-background top-16 transition-opacity ease-in duration-300 ${!show ? 'opacity-0 translate-y-full ' : 'opacity-100 translate-y-0'}`}>
          <ul className="flex flex-col text-2xl ml-4">
            <li className="my-8">
              <a href="#about" onClick={showMenu}>About</a>
            </li>
            <li className="my-8">
              <a href="#experience" onClick={showMenu}>Problems</a>
            </li>
            <li className="my-8">
              <a href="#work" onClick={showMenu}>Proposals</a>
            </li>
            <li className="my-8">
              <a href="#contact" onClick={showMenu}>Tools</a>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
