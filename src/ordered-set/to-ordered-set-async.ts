import { Comparer, fluentAsync } from '@codibre/fluent-iterable';
import { BinarySearchTreeSet } from './binary-search-tree-set';
import { getComparer } from '../utils/get-comparer';
import { getPropFactory } from '../utils/get-prop-factory';
import { Mapping } from '../types';

export async function toOrderedSetAsync<T>(
	this: Iterable<T> | AsyncIterable<T>,
	key: Mapping<T>,
	cmp: Comparer<unknown> | undefined,
) {
	const result = new BinarySearchTreeSet<unknown>(getComparer(cmp));
	const getKey = getPropFactory(key);
	await fluentAsync(this).forEach((x) => result.insert(getKey(x)));

	return result;
}
