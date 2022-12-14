import { extend, extendAsync, Mapper } from '@codibre/fluent-iterable';
import { BinarySearchTree } from './ordered-map/binary-search-tree';
import { toOrderedSet } from './ordered-set/to-ordered-set';
import { toOrderedSetAsync } from './ordered-set/to-ordered-set-async';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toBinarySearchTreeSet<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): BinarySearchTree<K, T>;
		toBinarySearchTreeSet<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): BinarySearchTree<T[K], T>;

		toBinarySearchTreeAsync<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTree<K, T>>;
		toBinarySearchTreeAsync<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTree<T[K], T>>;
	}

	interface FluentAsyncIterable<T> {
		toBinarySearchTreeSet<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTree<K, T>>;
		toBinarySearchTreeSet<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTree<T[K], T>>;
	}
}

extend.useResolving('toBinarySearchTreeSet', toOrderedSet);
extend.useResolving('toBinarySearchTreeSetAsync', toOrderedSetAsync);
extendAsync.useResolving('toBinarySearchTreeSet', toOrderedSetAsync);
