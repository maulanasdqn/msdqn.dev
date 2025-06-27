declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function initializeGoogleAnalytics(googleAnalyticsId: string): void {
  if (typeof window === 'undefined' || !googleAnalyticsId) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(script);
  window.gtag('js', new Date());
  window.gtag('config', googleAnalyticsId);
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}
