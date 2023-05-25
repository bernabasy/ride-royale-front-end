import renderer from 'react-test-renderer';
import DeleteCar from '../components/DeleteCar/DeleteCar';

it('Render the DeleteCar component', () => {
  const tree = renderer.create(
    <DeleteCar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
