// Node >= 22 defines an experimental global localStorage accessor that is
// undefined unless --localstorage-file is passed, and it shadows the jsdom
// implementation vitest would otherwise expose. Install an in-memory stand-in
// so storage code behaves the same across Node versions.
class MemoryStorage implements Storage {
	private store = new Map<string, string>();
	get length(): number {
		return this.store.size;
	}
	key(index: number): string | null {
		return [...this.store.keys()][index] ?? null;
	}
	getItem(key: string): string | null {
		return this.store.get(key) ?? null;
	}
	setItem(key: string, value: string): void {
		this.store.set(key, String(value));
	}
	removeItem(key: string): void {
		this.store.delete(key);
	}
	clear(): void {
		this.store.clear();
	}
}

Object.defineProperty(globalThis, 'localStorage', {
	value: new MemoryStorage(),
	configurable: true,
	writable: true,
});
