declare class Notification {
    static permission: string;
    static requestPermission(callback: (permission: string) => void): void;
    close(): void;
    constructor(title: string, options?: NotificationOptions);
}

interface NotificationOptions {
    dir?: string;
    lang?: string;
    body?: string;
    tag?: string;
    icon?: string; 
}

declare interface Window {
    Notification: Notification;
}
