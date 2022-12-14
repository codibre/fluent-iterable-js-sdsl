import { Comparer, fluentAsync, Reducer } from '@codibre/fluent-iterable';
import { BinarySearchTree } from './binary-search-tree';
import { fillOutMap } from './fill-out-map';
import { getComparer } from './get-comparer';
import { getPropFactory } from './get-prop-factory';
import { Mapping } from './types';

export async function toOrderedMapAsync<T>(
	this: Iterable<T> | AsyncIterable<T>,
	key: Mapping<T>,
	value: Mapping<T> | undefined,
	reducer: Reducer<unknown, unknown> | undefined,
	cmp: Comparer<unknown>,
) {
	if (arguments.length <= 3) {
		cmp = arguments[arguments.length - 1];
		reducer = undefined;
		if (arguments.length <= 2) {
			value = undefined;
		}
	}
	const result = new BinarySearchTree<unknown, unknown>(getComparer(cmp));
	const getKey = getPropFactory(key);
	const getValue = getPropFactory(value);
	await fluentAsync(this).forEach(
		fillOutMap(getKey, getValue, reducer, result),
	);

	return result;
}
