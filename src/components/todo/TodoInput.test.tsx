import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import TodoInput from './TodoInput';

test('loads and displays greeting', async () => {
  render(<TodoInput />);

  await userEvent.click(screen.getByText('제출'));
  await screen.findByRole('input');

  expect(screen.getByRole('input')).toBeUndefined();
});
