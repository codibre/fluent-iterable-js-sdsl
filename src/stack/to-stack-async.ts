import { fluentAsync } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';
import { IterableStack } from './iterable-stack';

export async function toStackAsync<T>(
	this: Iterable<T> | AsyncIterable<T>,
	key: Mapping<T>,
) {
	const result = new IterableStack<unknown>();
	await fluentAsync(this).forEach(fillOutFactory(result, 'push', key));

	return result;
}
