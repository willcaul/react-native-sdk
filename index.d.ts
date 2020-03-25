export class Iterable {
    static initialize(apiKey: string, config: IterableConfig): void
    static setEmail(email: string): void
    static getEmail(): Promise<String | null>
    static setUserId(userId: string): void
    static getUserId(): Promise<String | null>
    static disableDeviceForCurrentUser(): void
    static disableDeviceForAllUsers(): void
    static getInAppMessages(): void
}

export enum PushServicePlatform {
    sandbox = 0,
    production = 1,
    auto = 2
}

export enum IterableActionSource {
    push = 0,
    universalLink = 1,
    inApp = 2
}

export class IterableConfig {
    pushIntegrationName?: String
    sandboxPushIntegrationName?: String
    pushPlatform: PushServicePlatform
    autoPushRegistration: Boolean
    checkForDeferredDeeplink: Boolean
    inAppDisplayInterval: number
    urlDelegate?: (url: String, context: IterableActionContext) => Boolean
    customActionDelegate?: (action: IterableAction, context: IterableActionContext) => Boolean
}

export class IterableAction {
    type: String
    data?: String
    userInput?: String
}

export class IterableActionContext {
    action: IterableAction
    source: IterableActionSource
}
