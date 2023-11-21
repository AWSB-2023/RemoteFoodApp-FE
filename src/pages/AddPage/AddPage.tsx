import React, { useState } from 'react';
import './AddPage.scss';

export default function AddPage() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    time: '',
    photo: null,
    method: '',
    ingredients: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = () => {
    if (
      !(
        formData.name &&
        formData.country &&
        formData.time &&
        formData.ingredients &&
        formData.method
      )
    ) {
      setErrorMsg('Fill all required fields first');
      return;
    }
    setErrorMsg('');
    console.log(formData);
  };

  return (
    <div className='add-page'>
      <div className='add-food-form'>
        <div className='inputs-section'>
          <div>
            <label htmlFor='name'>Dishes name</label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label>
            <select
              id='country'
              className='custom-select'
              value={formData.country}
              onChange={handleChange}
            >
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
            <select
              id='time'
              className='custom-select'
              value={formData.time}
              onChange={handleChange}
            >
              <option value='' disabled></option>
              <option value='0.12'>5 min</option>
              <option value='0.25'>15 min</option>
              <option value='0.5'>30 min</option>
              <option value='1'>1h</option>
              <option value='2'>2h</option>
              <option value='3'>3h+</option>
            </select>
          </div>
          <div className='photo-input'>
            <label htmlFor='photo'>Photo</label>
            <div className='photo-container'>
              <input
                type='file'
                id='photo'
                onChange={handleFileChange}
                accept='image/*'
                className='photo-input'
              />
            </div>
          </div>
        </div>
        <div className='textarea-section'>
          <div>
            <label htmlFor='method'>Method</label>
            <textarea
              id='method'
              value={formData.method}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor='ingredients'>Ingredients</label>
            <textarea
              id='ingredients'
              value={formData.ingredients}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 50 }}>
        <button className='custom-button' onClick={handleSubmit}>
          Save
        </button>
        <div style={{ color: 'red' }}>{errorMsg}</div>
      </div>
    </div>
  );
}
