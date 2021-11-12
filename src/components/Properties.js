/* eslint-disable object-curly-newline */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {getProperties, filterProperties} from '../requests';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: '', isSuccess: false });
  
  useEffect(() => { getProperties(setProperties,setAlert)}, [] )
    
  const { search } = useLocation();
  useEffect(() => { filterProperties(search, setProperties, setAlert)}, [search])
 
  return (
    <div>
    <SideBar />
      <Alert message={alert.message} success={alert.isSuccess} />
      <h2>Properties</h2>
      {properties.map((property) => (
        <div key={property._id} className="property_cards">
          <PropertyCard key={property._id} {...property} />
        </div>
      ))}
    </div>
  );
};

Properties.propTypes = {
  title: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  type: PropTypes.string,
  price: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default Properties;
