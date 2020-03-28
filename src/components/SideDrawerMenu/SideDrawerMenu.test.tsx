import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SideDrawerMenu from './SideDrawerMenu';

afterEach(cleanup);

describe('<SideDrawerMenu />', () => {
  test('renders', () => {
    const { container } = render(<SideDrawerMenu myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

