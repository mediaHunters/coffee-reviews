interface ILogger {
    initialize(): void;
    write(message: string): void;
}

export { ILogger };
