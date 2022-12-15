import { fluentAsync } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';
import { IterableQueue } from './iterable-queue';

export async function toQueueAsync<T>(
	this: Iterable<T> | AsyncIterable<T>,
	key: Mapping<T>,
) {
	const result = new IterableQueue<unknown>();
	await fluentAsync(this).forEach(fillOutFactory(result, 'push', key));

	return result;
}
