// Google Analytics and Performance Monitoring
window.initAnalytics = function(googleAnalyticsId) {
  if (!googleAnalyticsId) return;
  
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', googleAnalyticsId);
  
  // Performance monitoring
  function sendToAnalytics(metric) {
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }

  function getCLS(onReport) {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries = [];
    
    if (typeof PerformanceObserver === 'undefined') return;
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          
          if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
          
          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            onReport({ name: 'CLS', value: clsValue, id: 'cls-' + Date.now() });
          }
        }
      }
    });
    
    if (PerformanceObserver.supportedEntryTypes?.includes('layout-shift')) {
      observer.observe({type: 'layout-shift', buffered: true});
    }
  }

  function getFCP(onReport) {
    if (typeof PerformanceObserver === 'undefined') return;
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          onReport({ name: 'FCP', value: entry.startTime, id: 'fcp-' + Date.now() });
        }
      }
    });
    
    if (PerformanceObserver.supportedEntryTypes?.includes('paint')) {
      observer.observe({type: 'paint', buffered: true});
    }
  }

  function getLCP(onReport) {
    if (typeof PerformanceObserver === 'undefined') return;
    
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      onReport({ name: 'LCP', value: lastEntry.startTime, id: 'lcp-' + Date.now() });
    });
    
    if (PerformanceObserver.supportedEntryTypes?.includes('largest-contentful-paint')) {
      observer.observe({type: 'largest-contentful-paint', buffered: true});
    }
  }

  function getFID(onReport) {
    if (typeof PerformanceObserver === 'undefined') return;
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        onReport({ name: 'FID', value: entry.processingStart - entry.startTime, id: 'fid-' + Date.now() });
      }
    });
    
    if (PerformanceObserver.supportedEntryTypes?.includes('first-input')) {
      observer.observe({type: 'first-input', buffered: true});
    }
  }

  const measurePerformance = () => {
    getCLS(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getFID(sendToAnalytics);
  };

  if (document.readyState === 'complete') {
    setTimeout(measurePerformance, 1000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(measurePerformance, 1000);
    });
  }
}; 