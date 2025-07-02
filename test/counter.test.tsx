import { render } from 'vitest-browser-qwik'
import { expect, test } from 'vitest'
import { Counter } from './fixtures/Counter';

test('renders root with CSR', async () => {
  const screen = await render(<Counter initialCount={1} />);
  await expect(true).toBeTruthy();
});