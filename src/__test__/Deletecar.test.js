import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Deletecar from '../pages/DeleteCar';

describe('Deletecar tests', () => {
    it('renders correctly', () => {
      const tree = render(
        <BrowserRouter>
            <Deletecar />
          </BrowserRouter>
      );
      expect(tree).toMatchSnapshot();
    });
  });