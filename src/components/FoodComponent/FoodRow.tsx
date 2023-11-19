import './Food.scss';
import heartDark from '../../images/heart-dark.svg';
import ratingIcon from '../../images/rating.svg';
import clockIcon from '../../images/clock.svg';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id: number;
  name: string;
  rating: number;
  time: number;
  image: string;
  small?: boolean;
}

export default function FoodRow(props: IProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dish/${props.id}`)}
      className='food-element-row'
    >
      <div>
        <img
          className={props.small ? 'img-small' : ''}
          src={props.image}
          style={{ marginBottom: 20 }}
          alt=''
        />
      </div>
      <div className={`food-desc${props.small ? '-small' : ''}`}>
        <div className={`title${props.small ? '-small' : ''}`}>
          {props.name}
        </div>
        <div className={`desc${props.small ? '-small' : ''}`}>
          <div>
            <img
              className={props.small ? 'img-small' : ''}
              src={ratingIcon}
              alt=''
            />
          </div>
          {props.rating} / 5
        </div>
        <div className={`desc${props.small ? '-small' : ''}`}>
          <div>
            <img
              className={props.small ? 'img-small' : ''}
              src={clockIcon}
              alt=''
            />
          </div>
          {props.time} hour
        </div>
        <div className={`desc${props.small ? '-small' : ''}`}>
          <div>
            <img
              className={props.small ? 'img-small' : ''}
              src={heartDark}
              alt=''
            />
          </div>
          Add to favourite
        </div>
      </div>
    </div>
  );
}
