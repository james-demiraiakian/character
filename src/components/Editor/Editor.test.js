import { render, screen } from '@testing-library/react';
import Editor from './Editor';

test('test of dom render', () => {
  const container = render(<Editor />);

  expect(container).toMatchSnapshot();
});
