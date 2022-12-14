import { Comparer } from '@codibre/fluent-iterable';

function defaultComparer(a: unknown, b: unknown) {
	const aType = typeof a;
	const bType = typeof b;
	if (aType === bType) {
		switch (aType) {
			case 'string':
				return (a as string).localeCompare(b as string);
			case 'number':
			case 'boolean':
				return (a as number) - (b as number);
			default:
				if (a instanceof Date && b instanceof Date) {
					return a.getDate() - b.getDate();
				}
		}
	}
	throw new TypeError('Inform a comparer function!');
}

export function getComparer(
	cmp: Comparer<unknown> | undefined,
): ((x: unknown, y: unknown) => number) | undefined {
	return cmp ?? defaultComparer;
}
