import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DeleteCar from '../components/DeleteCar/DeleteCar';

describe('Deletecar tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <DeleteCar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
