import {
	AsyncIterableResolvingOperation,
	extend,
	extendAsync,
	Mapper,
	Reducer,
} from '@codibre/fluent-iterable';
import { OrderedMap } from 'js-sdsl';
import { toOrderedMap } from './to-ordered-map';
import { toOrderedMapAsync } from './to-ordered-map-async';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toOrderedMap<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): OrderedMap<K, T>;
		toOrderedMap<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): OrderedMap<T[K], T>;
		toOrderedMap<K, V>(
			key: Mapper<T, K>,
			value: Mapper<T, V>,
			cmp?: (x: K, y: K) => number,
			reducer?: Reducer<T, V>,
		): OrderedMap<K, V>;
		toOrderedMap<K extends keyof T, V>(
			key: K,
			value: Mapper<T, V>,
			cmp?: (x: T[K], y: T[K]) => number,
			reducer?: Reducer<T, V>,
		): OrderedMap<T[K], V>;
		toOrderedMap<K, V extends keyof T>(
			key: Mapper<T, K>,
			value: V,
			cmp?: (x: K, y: K) => number,
		): OrderedMap<K, T[V]>;
		toOrderedMap<K extends keyof T, V extends keyof T>(
			key: K,
			value: V,
			cmp?: (x: T[K], y: T[K]) => number,
		): OrderedMap<T[K], T[V]>;

		toOrderedMapAsync<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<OrderedMap<K, T>>;
		toOrderedMapAsync<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<OrderedMap<T[K], T>>;
		toOrderedMapAsync<K, V>(
			key: Mapper<T, K>,
			value: Mapper<T, V>,
			cmp?: (x: K, y: K) => number,
			reducer?: Reducer<T, V>,
		): Promise<OrderedMap<K, V>>;
		toOrderedMapAsync<K extends keyof T, V>(
			key: K,
			value: Mapper<T, V>,
			cmp?: (x: T[K], y: T[K]) => number,
			reducer?: Reducer<T, V>,
		): Promise<OrderedMap<T[K], V>>;
		toOrderedMapAsync<K, V extends keyof T>(
			key: Mapper<T, K>,
			value: V,
			cmp?: (x: K, y: K) => number,
		): Promise<OrderedMap<K, T[V]>>;
		toOrderedMapAsync<K extends keyof T, V extends keyof T>(
			key: K,
			value: V,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<OrderedMap<T[K], T[V]>>;
	}

	interface FluentAsyncIterable<T> {
		toOrderedMap<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<OrderedMap<K, T>>;
		toOrderedMap<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<OrderedMap<T[K], T>>;
		toOrderedMap<K, V>(
			key: Mapper<T, K>,
			value: Mapper<T, V>,
			cmp?: (x: K, y: K) => number,
			reducer?: Reducer<T, V>,
		): Promise<OrderedMap<K, V>>;
		toOrderedMap<K extends keyof T, V>(
			key: K,
			value: Mapper<T, V>,
			cmp?: (x: T[K], y: T[K]) => number,
			reducer?: Reducer<T, V>,
		): Promise<OrderedMap<T[K], V>>;
		toOrderedMap<K, V extends keyof T>(
			key: Mapper<T, K>,
			value: V,
			cmp?: (x: K, y: K) => number,
		): Promise<OrderedMap<K, T[V]>>;
		toOrderedMap<K extends keyof T, V extends keyof T>(
			key: K,
			value: V,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<OrderedMap<T[K], T[V]>>;
	}
}

extend.useResolving('toOrderedMap', toOrderedMap);
extend.useResolving('toOrderedMapAsync', toOrderedMapAsync);
extendAsync.useResolving(
	'toOrderedMap',
	toOrderedMapAsync as unknown as AsyncIterableResolvingOperation,
);
