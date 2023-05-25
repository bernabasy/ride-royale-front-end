import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReservationCardItem from '../components/ReservationCardItem';

describe('ReservationCardItem tests', () => {
    it('renders correctly', () => {
      const tree = render(
        <BrowserRouter>
            <ReservationCardItem />
          </BrowserRouter>
      );
      expect(tree).toMatchSnapshot();
    });
  });