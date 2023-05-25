import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SideNav from '../components/SideNav';

describe('SideNav tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <SideNav />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
