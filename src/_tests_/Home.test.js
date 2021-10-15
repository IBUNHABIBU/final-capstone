import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import store from '../redux/store';

describe('Home', () => {
  it('Renders Home page correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
