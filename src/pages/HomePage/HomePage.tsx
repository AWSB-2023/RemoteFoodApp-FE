import japanIcon from '../../images/japan.svg';
import usaIcon from '../../images/usa.svg';
import chinaIcon from '../../images/china.svg';
import italyIcon from '../../images/italy.svg';
import turkeyIcon from '../../images/turkey.svg';
import polandIcon from '../../images/poland.svg';
import './HomePage.scss';
import FoodColumn from '../../components/FoodComponent/FoodColumn';
import { mockData } from '../../mocks/mockData';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='landing-page'>
      <div className='flags'>
        <img
          onClick={() => navigate('/all/poland')}
          src={polandIcon}
          alt='Poland'
        />
        <img
          onClick={() => navigate('/all/turkey')}
          src={turkeyIcon}
          alt='Turkey'
        />
        <img
          onClick={() => navigate('/all/japan')}
          src={japanIcon}
          alt='Japan'
        />
        <img
          onClick={() => navigate('/all/italy')}
          src={italyIcon}
          alt='Italy'
        />
        <img
          onClick={() => navigate('/all/china')}
          src={chinaIcon}
          alt='China'
        />
        <img onClick={() => navigate('/all/usa')} src={usaIcon} alt='USA' />
      </div>
      <div className='home-foods'>
        {mockData.slice(0, 3).map((el) => (
          <FoodColumn
            name={el.name}
            image={el.img}
            rating={el.rating}
            time={el.time}
            id={el.id}
          />
        ))}
      </div>
      <div>
        <button
          style={{ marginTop: 50 }}
          className='custom-button'
          onClick={() => navigate(`/all`)}
        >
          See all
        </button>
      </div>
    </div>
  );
}
