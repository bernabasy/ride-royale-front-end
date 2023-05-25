import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MakeReservation from '../pages/MakeReservation/MakeReservation';

describe('MakeReservation tests', () => {
    it('renders correctly', () => {
      const tree = render(
        <BrowserRouter>
            <MakeReservation />
          </BrowserRouter>
      );
      expect(tree).toMatchSnapshot();
    });
  });