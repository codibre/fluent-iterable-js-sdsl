import { OrderedMap } from 'js-sdsl';

export class BinarySearchTree<K, V> extends OrderedMap<K, V> {
	private treeEnd = this.end();

	findLe(key: K): [K, V] | undefined {
		const iterator = this.reverseLowerBound(key);

		if (iterator.equals(this.treeEnd)) {
			return undefined;
		}

		return [iterator.pointer[0], iterator.pointer[1]];
	}
}
