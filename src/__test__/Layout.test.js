import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

describe('Layout tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
