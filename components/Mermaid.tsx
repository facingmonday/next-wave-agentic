'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    
    const renderChart = async () => {
      try {
        // Dynamically import mermaid to prevent SSR errors
        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'loose',
          themeVariables: {
            background: '#0a0a16', // Dark background matching the app's palette
            primaryColor: '#6d28d9', // Deep violet
            primaryTextColor: '#f8fafc',
            lineColor: '#8b5cf6', // Indigo/violet line
            signalColor: '#ec4899', // Neon pink signals
            signalTextColor: '#f8fafc',
            noteBkgColor: '#1e1b4b',
            noteBorderColor: '#4338ca',
            actorBkg: '#1e1b4b',
            actorBorder: '#4338ca',
          }
        });

        if (!ref.current) return;
        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        
        if (active) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err: any) {
        console.error('Mermaid render error:', err);
        if (active) {
          setError(err.message || 'Failed to render diagram');
        }
      }
    };

    renderChart();
    
    return () => {
      active = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="my-8">
        <div className="px-4 py-2 bg-red-950/40 border-b border-red-900/40 rounded-t-xl text-xs font-semibold text-red-400">
          Render Error
        </div>
        <pre className="p-4 bg-red-950/20 text-red-300 border-x border-b border-red-900/30 rounded-b-xl overflow-x-auto text-xs">
          <code>{chart}</code>
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="flex items-center justify-center p-8 bg-night-navy/20 border border-muted-indigo/20 rounded-xl animate-pulse my-8 h-40">
        <span className="text-sm text-muted-indigo">Rendering diagram...</span>
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className="my-8 flex justify-center p-6 bg-night-navy/30 border border-muted-indigo/20 rounded-2xl overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
