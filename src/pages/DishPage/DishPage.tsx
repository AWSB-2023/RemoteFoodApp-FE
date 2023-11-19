import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../../mocks/mockData';
import { IDish } from '../../utils/interfaces';
import './DishPage.scss';
import heartDark from '../../images/heart-dark.svg';
import ratingIcon from '../../images/rating.svg';
import clockIcon from '../../images/clock.svg';

export default function DishPage() {
  const params = useParams();
  const { dishId } = params;
  const [dish, setDish] = useState<IDish | null>();

  useEffect(() => {
    if (!dishId) return;
    const currDish = mockData.find(
      (element) => element.id.toString() === dishId
    );
    setDish(currDish);
  }, [params]);
  return (
    <div className='dish-page'>
      {dish && (
        <div>
          <div className='dish-title'>
            <img src={dish.img} alt='' />
            <div>{dish.name}</div>
          </div>
          <div className='dish-content'>
            <div className='details'>
              <div className='about'>
                <div className='desc'>
                  <img src={ratingIcon} alt='' />
                  {dish.rating} / 5
                </div>
                <div className='desc'>
                  <img src={clockIcon} alt='' />
                  {dish.time} hour
                </div>
                <div className='desc'>
                  <img src={heartDark} alt='' />
                  Add to favourite
                </div>
              </div>
              <div className='ingredients'>
                <div style={{ marginBottom: 10 }}>Ingredients:</div>
                {dish.ingredients &&
                  dish.ingredients.length > 0 &&
                  dish.ingredients.map((el) => {
                    return <div style={{ marginLeft: 10 }}>- {el}</div>;
                  })}
              </div>
            </div>
            <div className='method'>
              <div>Method</div>
              {dish.method &&
                dish.method.length > 0 &&
                dish.method.map((el, index) => {
                  return (
                    <div>
                      <div className='step-name'>Step {index + 1}</div>
                      <div className='step-content'>{el}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
