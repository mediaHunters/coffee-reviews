interface IApplication {
    initializeBodyParsers(): void;
    initializeHandlers(): void;
    initializeLogging(): void;
    initializePlugins(): void;
    initializeExtensions(): void;
    initializeSecurity(): void;
}

export { IApplication };
