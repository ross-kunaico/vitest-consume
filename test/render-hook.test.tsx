import { $, type QRL, type Signal, useSignal } from "@builder.io/qwik";
import { expect, test } from "vitest";
import { renderHook } from "vitest-browser-qwik";
import { useCounter } from "./fixtures/useCounter";

test("should increment counter", async () => {
	const { result } = await renderHook(() =>
		useCounter({ countSignal: useSignal(0) }),
	);

	await result.increment$();

	expect(result.count.value).toBe(1);
});

function useOtherCounter({ countSignal }: { countSignal: Signal<number> }): {
	count: Signal<number>;
	increment$: QRL<() => number>;
} {
	const count = countSignal;

	const increment$ = $(() => count.value++);

	return { count, increment$ };
}

test("should increment local hook counter", async () => {
	const { result } = await renderHook(() =>
		useOtherCounter({ countSignal: useSignal(0) }),
	);

	await result.increment$();

	expect(result.count.value).toBe(1);
});
