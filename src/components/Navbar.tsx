import Logo from '../images/Logo.svg';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='landing-page'>
      <div className='landing-bar'>
        <img src={Logo} alt='Remote Food App' />
        <div className='menu-items'>
          <span>HOME</span>
          <span>TOP 100</span>
          <span>FAVOURITE</span>
          <span>MY PROFILE</span>
        </div>
      </div>
    </div>
  );
}
