import './SeeAll.scss';
import { mockData } from '../../mocks/mockData';
import FoodRow from '../../components/FoodComponent/FoodRow';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import japanIcon from '../../images/japan.svg';
import usaIcon from '../../images/usa.svg';
import chinaIcon from '../../images/china.svg';
import italyIcon from '../../images/italy.svg';
import turkeyIcon from '../../images/turkey.svg';
import polandIcon from '../../images/poland.svg';

export default function SeeAll() {
  const [displayedOnPage, setDisplayedOnPage] = useState(6);
  const params = useParams();
  const { countryName } = params;
  const [country, setCountry] = useState('');
  const [dishes, setDishes] = useState(mockData);

  useEffect(() => {
    if (!countryName) return;
    setCountry(countryName);
  }, []);

  useEffect(() => {
    if (!country) return;
    const dishesArr = mockData.filter(
      (el) => el.country.toLowerCase() === country.toLowerCase()
    );
    setDishes(dishesArr);
  }, [country]);

  const getCountry = (country: string) => {
    let flag;
    let name;
    switch (country) {
      case 'usa':
        flag = usaIcon;
        name = 'American';
        break;
      case 'japan':
        flag = japanIcon;
        name = 'Japanese';
        break;
      case 'china':
        flag = chinaIcon;
        name = 'Chinese';
        break;
      case 'italy':
        flag = italyIcon;
        name = 'Italian';
        break;
      case 'turkey':
        flag = turkeyIcon;
        name = 'Turkish';
        break;
      case 'poland':
        flag = polandIcon;
        name = 'Polish';
        break;
      default:
        setCountry('');
        break;
    }

    return (
      <div className='food-region'>
        <img src={flag} alt='' />
        <div>{name} food</div>
      </div>
    );
  };

  return (
    <div className='landing-page'>
      <div className='see-all'>
        {country && (
          <div className='see-all-country'>{getCountry(country)}</div>
        )}
        <div className='all-foods'>
          {dishes.slice(0, displayedOnPage).map((el, index) => (
            <div className='top-food-row'>
              <FoodRow
                key={index}
                name={el.name}
                image={el.img}
                rating={el.rating}
                time={el.time}
                id={el.id}
                small={true}
              />
            </div>
          ))}
        </div>
        {displayedOnPage < mockData.length && (
          <div>
            <button
              className='custom-button'
              onClick={() => setDisplayedOnPage(displayedOnPage + 10)}
            >
              See more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
