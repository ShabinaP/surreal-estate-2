import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from '../../components/PropertyCard';

describe('Property Card component', () => {
  const validProps = {
    title: 'Dream House',
    bathrooms: 2,
    bedrooms: 4,
    type: 'Detached',
    price: 200000,
    city: 'Manchester',
    email: 'jane.jones@hotmail.com',
  };
  test('displays a property card with the correct props', () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        type={validProps.type}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders correct value for props', () => {
    render(
      <PropertyCard
        title={validProps.title}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        type={validProps.type}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const titleElement = screen.getByText(/dream house/i);
    expect(titleElement).toBeInTheDocument();
    const typeElement = screen.getByText(/detached/i);
    expect(typeElement).toBeInTheDocument();
    const cityElement = screen.getByText(/Manchester/i);
    expect(cityElement).toBeInTheDocument();
    const emailElement = screen.getByText(/jane.jones@hotmail.com/i);
    expect(emailElement).toBeInTheDocument();
  });
});
