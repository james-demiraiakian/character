import { render } from '@testing-library/react';
import Display from './Display';

test('test of dom render', () => {
  const container = render(<Display />);

  expect(container).toMatchSnapshot();
});
