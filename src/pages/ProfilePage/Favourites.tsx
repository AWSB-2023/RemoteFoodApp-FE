import './ProfilePage.scss';
import { mockData } from '../../mocks/mockData';
import FoodRow from '../../components/FoodComponent/FoodRow';
import { useState } from 'react';

export default function Favourites() {
  const [displayedOnPage, setDisplayedOnPage] = useState(6);

  return (
    <div className='landing-page'>
      <div className='see-all'>
        <div className='see-all-country'>Favourites</div>
        <div className='all-foods'>
          {mockData.slice(0, displayedOnPage).map((el, index) => (
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
