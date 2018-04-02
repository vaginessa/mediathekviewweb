declare type StringMap<TValue = any> = { [key: string]: TValue };
declare type NumberMap<TValue = any> = { [key: number]: TValue };
declare type Undefinable<T> = T | undefined;
declare type Sub<O extends string, D extends string> = {[K in O]: (Record<D, never> & Record<string, K>)[K]}[O];
declare type Omit<O, D extends string> = Pick<O, Sub<keyof O, D>>;
declare type PartialProperty<T, P extends keyof T> = Partial<Pick<T, P>>;
declare type PropertyOf<T extends object, P extends keyof T> = {[P2 in keyof T[P]]: T[P][P2]};
declare type Property<P extends keyof T, T extends object> = {[P2 in keyof T[P]]: T[P][P2]};
declare type Of<T> = T;