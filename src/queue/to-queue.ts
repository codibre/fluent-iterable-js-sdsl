import { fluent } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';
import { IterableQueue } from './iterable-queue';

export function toQueue<T>(this: Iterable<T>, key: Mapping<T>) {
	const result = new IterableQueue<unknown>();
	fluent(this).forEach(fillOutFactory(result, 'push', key));

	return result;
}
