import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HamburgerMenu from './HamburgerMenu';

afterEach(cleanup);

describe('<HamburgerMenu />', () => {
  test('renders', () => {
    const { container } = render(<HamburgerMenu myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

