import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';

test('Snapshot Testing of Header.js', () => {
  const comp = renderer.create(
    <Router>
      <Header />
    </Router>,
  );
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});
