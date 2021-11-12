import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/Navbar'

describe('NavBar', () => {
  test('it renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('it renders a link with the text view properties', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const viewPropertiesLink = screen.getByRole('link', {
      name: /view properties/i,
    });
    expect(viewPropertiesLink).toBeInTheDocument();
  });
  test('it renders a link with the text add a property', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const addPropertyLink = screen.getByRole('link', {
      name: /add a property/i,
    });
    expect(addPropertyLink).toBeInTheDocument();
  });
});
