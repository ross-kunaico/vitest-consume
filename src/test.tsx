import { render } from 'vitest-browser-qwik'
import { expect, test } from 'vitest'
import Root from './root';

test('renders root with CSR', async () => {
  const screen = render(<Root />);
  expect(screen).toBeTruthy();
});