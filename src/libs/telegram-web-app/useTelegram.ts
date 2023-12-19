import './telegram-web-app.js';

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;
  return {
    showAlert: tg.showAlert,
    isVersionAtLeast: tg.isVersionAtLeast,
    expand: tg.expand,
    isExpanded: tg.isExpanded,
  };
};
