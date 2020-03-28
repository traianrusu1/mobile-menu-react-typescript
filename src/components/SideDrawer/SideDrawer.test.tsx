import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SideDrawer from './SideDrawer';

afterEach(cleanup);

describe('<SideDrawer />', () => {
  test('renders', () => {
    const { container } = render(<SideDrawer myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

