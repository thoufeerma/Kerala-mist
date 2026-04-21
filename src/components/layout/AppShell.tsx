'use client';

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <LoadingScreen
          minDuration={1800}
          maxDuration={2500}
          onComplete={() => setLoading(false)}
        />
      )}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        {children}
      </div>
    </>
  );
}
