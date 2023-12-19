import { WebApp } from './telegram';

declare global {
  interface Window {
    Telegram: {
      WebApp: WebApp,
    }
  }
}
