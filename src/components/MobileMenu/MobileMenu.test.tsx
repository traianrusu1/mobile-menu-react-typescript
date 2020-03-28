import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MobileMenu from './MobileMenu';

afterEach(cleanup);

describe('<MobileMenu />', () => {
  test('renders', () => {
    const { container } = render(<MobileMenu myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

