import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarCard from '../components/CarsList/CarCard';
import CarsList from '../components/CarsList/CarsList';

describe('CarCard tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <CarCard />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('CarsList tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <CarsList />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
