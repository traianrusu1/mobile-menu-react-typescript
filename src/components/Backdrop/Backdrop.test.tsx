import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Backdrop from './Backdrop';

afterEach(cleanup);

describe('<Backdrop />', () => {
  test('renders', () => {
    const { container } = render(<Backdrop myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

