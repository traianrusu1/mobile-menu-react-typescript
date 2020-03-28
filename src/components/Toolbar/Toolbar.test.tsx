import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Toolbar from './Toolbar';

afterEach(cleanup);

describe('<Toolbar />', () => {
  test('renders', () => {
    const { container } = render(<Toolbar myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

