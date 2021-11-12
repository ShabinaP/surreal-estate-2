import React, { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: '', sucess: false });
    axios
      .post('http://localhost:3000/api/v1/PropertyListing ', {
        title: fields.title,
        type: fields.type,
        bedrooms: fields.bedrooms,
        bathrooms: fields.bathrooms,
        price: fields.price,
        city: fields.city,
        email: fields.email,
      })
      .then(() => {
        setAlert({
          message: 'Property added',
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: 'Server Error. Please try again later.',
          isSuccess: false,
        });
      });
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="background">
      <div className="Addproperty">
        <h2>Add a Property</h2>
        <form onSubmit={handleAddProperty}>
          <label htmlFor="title">
            Title
            <br />
            <input
              id="title"
              className="input__title"
              placeholder="Title for property"
              type="text"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <label htmlFor="city">
            City
            <br />
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
              className="selectCity"
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <br />
          <label htmlFor="type">
            Type of property
            <br />
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terrace">Terrace</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <br />
          <label htmlFor="bedrooms">
            Bedrooms
            <br />
            <input
              type="number"
              className="input__bedrooms"
              placeholder="3"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <label htmlFor="bathrooms">
            Bathrooms
            <br />
            <input
              type="number"
              className="input__bathrooms"
              placeholder="2"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <label htmlFor="price">
            Price £
            <br />
            <input
              type="number"
              className="input__price"
              min="0.01"
              step="0.01"
              placeholder="250000"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <label htmlFor="email">
            Email
            <br />
            <input
              type="email"
              className="input__email"
              placeholder="jane.jones@gmail.com"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <button type="submit" className="submitButton">
            Add
          </button>
          <Alert message={alert.message} success={alert.isSuccess} />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;