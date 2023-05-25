import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CarDetails from '../components/CarDetails/CarDetails';

describe('Render the CarDetails component', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <CarDetails />
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
