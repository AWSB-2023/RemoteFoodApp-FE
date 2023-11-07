import exampleImage from '../../images/exampleImage.svg';
import './Food.scss';
import heartDark from '../../images/heart-dark.svg';
import ratingIcon from '../../images/rating.svg';
import clockIcon from '../../images/clock.svg';

interface IProps {
  id: number;
  name: string;
  rating: number;
  time: number;
  image: string;
}

export default function FoodColumn(props: IProps) {
  return (
    <div className='food-element'>
      <img src={props.image} style={{ marginBottom: 20 }} alt='' />
      <div className='title'>{props.name}</div>
      <div className='desc'>
        <img src={ratingIcon} alt='' />
        {props.rating} / 5
      </div>
      <div className='desc'>
        <img src={clockIcon} alt='' />
        {props.time} hour
      </div>
      <div className='desc'>
        <img src={heartDark} alt='' />
        Add to favourite
      </div>
    </div>
  );
}
