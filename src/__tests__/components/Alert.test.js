import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../components/Alert';

describe('Alert component', () => {
  test('renders an error message if submission is unsuccessful', () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe('Error!');
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders a successful message when submisson is successful', () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );
    expect(getByText(/Success/).textContent).toBe('Success!');
    expect(asFragment()).toMatchSnapshot();
  });
  test('if message is empty, no message is rendered', () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});