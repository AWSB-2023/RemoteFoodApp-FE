import japanIcon from '../../images/japan.svg';
import usaIcon from '../../images/usa.svg';
import chinaIcon from '../../images/china.svg';
import italyIcon from '../../images/italy.svg';
import turkeyIcon from '../../images/turkey.svg';
import polandIcon from '../../images/poland.svg';
import './HomePage.scss';
import FoodColumn from '../../components/FoodComponent/FoodColumn';
import { mockData } from './mockData';

export default function HomePage() {
  return (
    <div className='landing-page'>
      <div className='flags'>
        <img src={polandIcon} alt='Poland' />
        <img src={turkeyIcon} alt='Turkey' />
        <img src={japanIcon} alt='Japan' />
        <img src={italyIcon} alt='Italy' />
        <img src={chinaIcon} alt='China' />
        <img src={usaIcon} alt='USA' />
      </div>
      <div className='home-foods'>
        {mockData.map((el) => (
          <FoodColumn
            name={el.name}
            image={el.img}
            rating={el.rating}
            time={el.time}
            id={el.id}
          />
        ))}
      </div>
    </div>
  );
}
