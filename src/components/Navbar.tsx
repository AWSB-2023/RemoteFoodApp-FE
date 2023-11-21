import { useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import './Navbar.scss';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='landing-page'>
      <div className='landing-bar'>
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('./home')}
          src={Logo}
          alt='Remote Food App'
        />
        <div className='menu-items'>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('./home')}
          >
            HOME
          </span>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('./top')}>
            TOP 100
          </span>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('./favourites')}
          >
            FAVOURITE
          </span>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('./profile')}
          >
            MY PROFILE
          </span>
        </div>
      </div>
    </div>
  );
}
