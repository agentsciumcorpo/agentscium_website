'use client';

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url,
  minWidth = '320px',
  height = '700px',
}: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden shadow-xl"
      data-url={url}
      style={{ minWidth, height }}
    />
  );
}
