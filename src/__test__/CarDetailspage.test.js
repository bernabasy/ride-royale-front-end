import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import CarDetails from '../Components/CarDetails/CarDetails';
import renderer from 'react-test-renderer';

it('Check the component', () => {
  const tree = renderer.create(
      <CarDetails />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
