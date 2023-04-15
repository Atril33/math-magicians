import renderer from 'react-test-renderer';
import Home from './home';

test('Snapshot testing of Home.js', () => {
  const comp = renderer.create(
    <Home />,
  );
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});
