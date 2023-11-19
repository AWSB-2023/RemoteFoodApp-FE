import './TopPage.scss';
import { mockData } from '../../mocks/mockData';
import FoodRow from '../../components/FoodComponent/FoodRow';
import { useState } from 'react';

export default function TopPage() {
  const [displayedOnPage, setDisplayedOnPage] = useState(5);

  return (
    <div className='landing-page'>
      <div className='top-foods'>
        {mockData.slice(0, displayedOnPage).map((el, index) => (
          <div className='top-food-row'>
            <span
              style={{
                fontSize: index > 2 ? 40 : 80,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {index + 1}
            </span>
            <FoodRow
              key={index}
              name={el.name}
              image={el.img}
              rating={el.rating}
              time={el.time}
              id={el.id}
              small={index > 2 ? true : false}
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
  );
}
