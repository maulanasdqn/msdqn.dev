declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function initializeGoogleTagManager(gtmId: string): void {
  if (typeof window === 'undefined' || !gtmId) return;

  window.dataLayer = window.dataLayer || [];

  (function (w: any, d: Document, s: string, l: string, i: string) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as HTMLScriptElement;
    const dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode?.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', gtmId);
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
  if (typeof window !== 'undefined') {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }
}

export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window !== 'undefined') {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
    if (window.gtag) {
      window.gtag('config', window.gtag, {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  }
}
