import { render } from 'vitest-browser-qwik'
import { expect, test } from 'vitest'
import { Root } from './root';

test('renders root with CSR', async () => {
  const screen = await render(<Root />);
  await expect(true).toBeTruthy();
});