import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import mainFood from '../../images/main-food.png';
import './LandingPage.scss';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className='landing-page'>
      <div className='landing-bar'>
        <img src={Logo} alt='Remote Food App' />
        <button className='loginBtn' onClick={() => navigate('/signup')}>
          LOGIN
        </button>
      </div>
      <div className='landing-content'>
        <div>
          <div className='landing-title'>
            Delicious dishes for any occasion!
          </div>
          <div className='landing-desc'>
            Explore recipes from users around the world and share your own.
          </div>
          <div className='btn-element'>
            <button className='exploreBtn'>EXPLORE NOW</button>
          </div>
        </div>
        <div>
          <img src={mainFood} alt='' />
        </div>
      </div>
    </div>
  );
}
