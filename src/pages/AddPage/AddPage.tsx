import { useEffect, useState } from 'react';
import './AddPage.scss';
import cameraIcon from '../../images/camera.svg';

export default function AddPage() {
  return (
    <div className='add-page'>
      <div className='add-food-form'>
        <div className='inputs-section'>
          <div>
            <label htmlFor='name'>Dishes name</label>
            <input type='text' id='name' />
          </div>
          <div>
            <label htmlFor='country'>Country</label>
            <select name='' id='country' className='custom-select'>
              <option value='' disabled></option>
              <option value='poland'>Poland</option>
              <option value='japan'>Japan</option>
              <option value='usa'>USA</option>
              <option value='china'>China</option>
              <option value='turkey'>Turkey</option>
              <option value='italy'>Italy</option>
            </select>
          </div>
          <div>
            <label htmlFor='time'>Time</label>
            <select name='' id='time' className='custom-select'>
              <option value='' disabled></option>
              <option value='0.12'>5 min</option>
              <option value='0.25'>15 min</option>
              <option value='0.5'>30 min</option>
              <option value='1'>1h</option>
              <option value='2'>2h</option>
              <option value='3'>3h+</option>
            </select>
          </div>
          <div>
            <label htmlFor='photo'>Photo</label>
            <input type='text' id='photo' />
          </div>
        </div>
        <div className='textarea-section'>
          <div>
            <label htmlFor='method'>Method</label>
            <textarea name='method' id='method'></textarea>
          </div>
          <div>
            <label htmlFor='ingredients'>Ingredients</label>
            <textarea name='ingredients' id='ingredients'></textarea>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 50 }}>
        <button className='custom-button'>Save</button>
      </div>
    </div>
  );
}
