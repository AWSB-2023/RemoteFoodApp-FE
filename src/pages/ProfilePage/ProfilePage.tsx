import './ProfilePage.scss';
import { mockData } from '../../mocks/mockData';
import FoodColumn from '../../components/FoodComponent/FoodColumn';
import { IDish } from '../../utils/interfaces';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();
  const renderSection = (title: string, data: IDish[]) => {
    return (
      <div className='profile-section'>
        <div className='sec-title'>{title}</div>
        {data.length === 0 ? (
          <div className='info'>Dishes list is empty</div>
        ) : (
          <div>
            {data.slice(0, 1).map((el, index) => (
              <div className='top-food-row'>
                <FoodColumn
                  key={index}
                  name={el.name}
                  image={el.img}
                  rating={el.rating}
                  time={el.time}
                  id={el.id}
                />
              </div>
            ))}
            {data.length > 1 && (
              <button
                style={{ marginTop: 20 }}
                className='custom-button'
                onClick={() =>
                  navigate(`/${title.replace(/\s+/g, '').toLowerCase()}`)
                }
              >
                See all
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='profile-page'>
      {renderSection('My dishes', mockData)}
      {renderSection('Favourites', mockData)}
      <div className='btn-section'>
        <button
          className='custom-button add-btn'
          onClick={() => navigate('/add')}
        >
          Add dishes
        </button>
      </div>
    </div>
  );
}
