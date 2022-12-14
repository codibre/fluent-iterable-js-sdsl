import { Mapping } from '../types';
import { getPropFactory } from '../utils/get-prop-factory';
import { BinarySearchTreeSet } from './binary-search-tree-set';

export function fillOutSet<T>(
	result: BinarySearchTreeSet<unknown>,
	key: Mapping<T>,
) {
	const getKey = getPropFactory(key);
	return (x: T) => result.insert(getKey(x));
}
