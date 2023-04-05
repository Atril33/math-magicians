import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('Whole Code Snapshot testing', () => {
  const components = renderer.create(
    <Router>
      <App />
    </Router>,

  );
  const tree = components.toJSON();
  expect(tree).toMatchSnapshot();
});
