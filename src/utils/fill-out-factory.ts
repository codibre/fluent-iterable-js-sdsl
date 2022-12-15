import { KeysOfType } from '@codibre/fluent-iterable/dist/types';
import { Mapping } from '../types';
import { getPropFactory } from './get-prop-factory';

export function fillOutFactory<
	O extends object,
	M extends KeysOfType<O, (t: unknown) => unknown>,
	T,
>(result: O, method: M, baseValue: Mapping<T> | undefined) {
	const getValue = getPropFactory(baseValue);
	if (typeof result[method] === 'function') {
		return (x: T) =>
			(result[method] as unknown as (t: unknown) => unknown)(getValue(x));
	}
	throw new TypeError(`Invalid method ${method.toString()}`);
}
