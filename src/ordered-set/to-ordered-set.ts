import { Comparer, fluent } from '@codibre/fluent-iterable';
import { BinarySearchTreeSet } from './binary-search-tree-set';
import { getComparer } from '../utils/get-comparer';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';

export function toOrderedSet<T>(
	this: Iterable<T>,
	key: Mapping<T>,
	cmp: Comparer<unknown> | undefined,
) {
	const result = new BinarySearchTreeSet<unknown>(getComparer(cmp));
	fluent(this).forEach(fillOutFactory(result, 'insert', key));

	return result;
}
