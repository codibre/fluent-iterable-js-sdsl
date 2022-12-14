import { Reducer } from '@codibre/fluent-iterable';
import { OrderedMap } from 'js-sdsl';

export function fillOutMap<T>(
	getKey: (t: T) => unknown,
	getValue: (t: T) => unknown,
	reducer: Reducer<unknown, unknown> | undefined,
	result: OrderedMap<unknown, unknown>,
) {
	return (t: T) => {
		const k = getKey(t);
		let v = getValue(t);
		if (reducer) {
			const last = result.getElementByKey(k);
			if (last !== undefined) {
				v = reducer(last, v);
			}
		}
		result.setElement(k, v);
	};
}
