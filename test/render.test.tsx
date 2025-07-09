// import { component$, useSignal } from "@builder.io/qwik";
import { page } from "@vitest/browser/context";
import { expect, test } from "vitest";
import { render } from "vitest-browser-qwik";
import { Counter } from "./fixtures/Counter";
import { HelloWorld } from "./fixtures/HelloWorld";

test("renders simple component", async () => {
  const screen = render(<HelloWorld />);
  await expect.element(page.getByText("Hello World")).toBeVisible();
  expect(screen.container).toMatchSnapshot();
});

test("renders counter", async () => {
  const screen = render(<Counter initialCount={1} />);

  await expect.element(screen.getByText("Count is 1")).toBeVisible();
  const button = screen.getByRole("button", { name: "Increment" });
  console.log("Increment button", button.element());
  await expect.element(button).toBeVisible();
  await button.click();
  await expect.element(screen.getByText("Count is 2")).toBeVisible();
});
//
// const InteractiveCounter = component$<{ initialCount: number }>(
//   ({ initialCount = 0 }) => {
//     const count = useSignal(initialCount);
//
//     return (
//       <>
//         <div>Count is {count.value}</div>
//         <button type="button" onClick$={() => count.value++}>
//           Increment
//         </button>
//       </>
//     );
//   },
// );
//
// test("renders local counter", async () => {
//   const screen = render(<InteractiveCounter initialCount={1} />);
//
//   await expect.element(screen.getByText("Count is 1")).toBeVisible();
//   await screen.getByRole("button", { name: "Increment" }).click();
//   await expect.element(screen.getByText("Count is 2")).toBeVisible();
// });
