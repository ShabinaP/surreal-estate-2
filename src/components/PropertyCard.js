/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { FaBed, FaBath, FaPoundSign } from 'react-icons/fa';

const PropertyCard = ({
  title,
  bathrooms,
  bedrooms,
  type,
  price,
  city,
  email,
}) => (
  <div className="property-card">
    <div className="property-card_title">{title}</div>
    <div className="property-card_bathrooms">
      <FaBath /> {bathrooms}
    </div>
    <div className="property-card_bedrooms">
      <FaBed /> {bedrooms}
    </div>
    <div className="property-card_type"> {type} </div>
    <div className="property-card_price">
      <FaPoundSign /> {price}
    </div>
    <div className="property-card_city"> {city} </div>
    <div className="property-card_email">{email}</div>
  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  type: PropTypes.string,
  price: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default PropertyCard;