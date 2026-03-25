import { Suspense } from 'react';
import ResultsClient from './results-client';

export const dynamic = 'force-dynamic';

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <section style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        background: '#FAF8F5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6B6560',
          }}>
            Loading your results...
          </p>
        </div>
      </section>
    }>
      <ResultsClient />
    </Suspense>
  );
}
