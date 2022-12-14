export type Mapping<T> = keyof T | ((t: T) => unknown);
