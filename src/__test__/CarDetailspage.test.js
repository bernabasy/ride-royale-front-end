import renderer from 'react-test-renderer';
import CarDetails from '../Components/CarDetails/CarDetails';

it('Render the CarDetails component', () => {
  const tree = renderer.create(
    <CarDetails />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
