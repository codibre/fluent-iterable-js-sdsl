import { Comparer, fluentAsync } from '@codibre/fluent-iterable';
import { BinarySearchTreeSet } from './binary-search-tree-set';
import { getComparer } from '../utils/get-comparer';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';

export async function toOrderedSetAsync<T>(
	this: Iterable<T> | AsyncIterable<T>,
	key: Mapping<T>,
	cmp: Comparer<unknown> | undefined,
) {
	const result = new BinarySearchTreeSet<unknown>(getComparer(cmp));
	await fluentAsync(this).forEach(fillOutFactory(result, 'insert', key));

	return result;
}
