type WebApp = {
  version: string;
  isExpanded: boolean;
  showAlert(message: string, cb?: () => void): void;
  isVersionAtLeast(version: string): boolean;
  expand(): void;
};

export type Telegram = {
  WebApp: WebApp,
};
