import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Layout from './Layout';

afterEach(cleanup);

describe('<Layout />', () => {
  test('renders', () => {
    const { container } = render(<Layout> Test Children </Layout>);
    expect(container).toMatchSnapshot();
  });
});
