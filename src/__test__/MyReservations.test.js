import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyReservations from '../pages/MyReservations';

describe('MyReservations tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <MyReservations />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
