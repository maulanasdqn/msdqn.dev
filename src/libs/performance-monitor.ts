interface Metric {
  name: string;
  value: number;
  id: string;
}

export class PerformanceMonitor {
  private static metrics: Metric[] = [];
  private static batchTimeout: number | null = null;

  private static sendToAnalytics(metric: Metric): void {
    this.metrics.push(metric);
    if (this.batchTimeout) return;
    this.batchTimeout = window.setTimeout(() => {
      this.flushMetrics();
      this.batchTimeout = null;
    }, 1000);
  }

  private static flushMetrics(): void {
    if (typeof window !== 'undefined' && this.metrics.length > 0) {
      this.metrics.forEach(metric => {
        if (window.gtag) {
          window.gtag('event', metric.name, {
            value: Math.round(
              metric.name === 'CLS' ? metric.value * 1000 : metric.value
            ),
            event_category: 'Web Vitals',
            event_label: metric.id,
            non_interaction: true,
            transport_type: 'beacon',
          });
        }
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'web_vitals',
            metric_name: metric.name,
            metric_value: metric.value,
            metric_id: metric.id,
          });
        }
      });
      this.metrics = [];
    }
  }

  private static getCLS(onReport: (metric: Metric) => void): void {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries: any[] = [];

    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver(entryList => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          if (
            sessionValue &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += (entry as any).value;
            sessionEntries.push(entry);
          } else {
            sessionValue = (entry as any).value;
            sessionEntries = [entry];
          }
          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            onReport({
              name: 'CLS',
              value: clsValue,
              id: 'cls-' + Date.now(),
            });
          }
        }
      }
    });

    if (PerformanceObserver.supportedEntryTypes?.includes('layout-shift')) {
      observer.observe({ type: 'layout-shift', buffered: true });
    }
  }

  private static getFCP(onReport: (metric: Metric) => void): void {
    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver(entryList => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          onReport({
            name: 'FCP',
            value: entry.startTime,
            id: 'fcp-' + Date.now(),
          });
        }
      }
    });

    if (PerformanceObserver.supportedEntryTypes?.includes('paint')) {
      observer.observe({ type: 'paint', buffered: true });
    }
  }

  private static getLCP(onReport: (metric: Metric) => void): void {
    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver(entryList => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      onReport({
        name: 'LCP',
        value: lastEntry.startTime,
        id: 'lcp-' + Date.now(),
      });
    });

    if (
      PerformanceObserver.supportedEntryTypes?.includes(
        'largest-contentful-paint'
      )
    ) {
      observer.observe({
        type: 'largest-contentful-paint',
        buffered: true,
      });
    }
  }

  private static getFID(onReport: (metric: Metric) => void): void {
    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver(entryList => {
      for (const entry of entryList.getEntries()) {
        onReport({
          name: 'FID',
          value: (entry as any).processingStart - entry.startTime,
          id: 'fid-' + Date.now(),
        });
      }
    });

    if (PerformanceObserver.supportedEntryTypes?.includes('first-input')) {
      observer.observe({ type: 'first-input', buffered: true });
    }
  }

  public static initialize(): void {
    if (typeof window === 'undefined') return;

    const measurePerformance = (): void => {
      this.getCLS(this.sendToAnalytics);
      this.getFCP(this.sendToAnalytics);
      this.getLCP(this.sendToAnalytics);
      this.getFID(this.sendToAnalytics);
    };

    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 1000);
      });
    }
  }
}
