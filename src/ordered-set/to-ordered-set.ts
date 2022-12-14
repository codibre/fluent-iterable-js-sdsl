import { Comparer, fluent } from '@codibre/fluent-iterable';
import { BinarySearchTreeSet } from './binary-search-tree-set';
import { getComparer } from '../utils/get-comparer';
import { Mapping } from '../types';
import { fillOutSet } from './fill-out-set';

export function toOrderedSet<T>(
	this: Iterable<T>,
	key: Mapping<T>,
	cmp: Comparer<unknown> | undefined,
) {
	const result = new BinarySearchTreeSet<unknown>(getComparer(cmp));
	fluent(this).forEach(fillOutSet(result, key));

	return result;
}
