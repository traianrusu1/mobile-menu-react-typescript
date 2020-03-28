import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SideDrawerMenuItem from './SideDrawerMenuItem';

afterEach(cleanup);

describe('<SideDrawerMenuItem />', () => {
  test('renders', () => {
    const { container } = render(<SideDrawerMenuItem myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

