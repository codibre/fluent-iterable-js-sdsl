import { Comparer, fluent, Reducer } from '@codibre/fluent-iterable';
import { fillOutMap } from './fill-out-map';
import { getPropFactory } from './get-prop-factory';
import { getComparer } from './get-comparer';
import { Mapping } from './types';
import { BinarySearchTree } from './binary-search-tree';

export function toOrderedMap<T>(
	this: Iterable<T>,
	key: Mapping<T>,
	value: Mapping<T> | undefined,
	cmp: Comparer<unknown> | undefined,
	reducer: Reducer<unknown, unknown> | undefined,
) {
	if (arguments.length === 2) {
		cmp = arguments[arguments.length - 1];
		value = undefined;
	}
	const result = new BinarySearchTree<unknown, unknown>(getComparer(cmp));
	const getKey = getPropFactory(key);
	const getValue = getPropFactory(value);
	fluent(this).forEach(fillOutMap(getKey, getValue, reducer, result));

	return result;
}
