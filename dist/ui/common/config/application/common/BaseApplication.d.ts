declare abstract class BaseApplication<T> {
    protected readonly app: T;
    protected constructor(app: T);
    abstract initialize(): void;
    getApplication(): T;
}

export { BaseApplication };
