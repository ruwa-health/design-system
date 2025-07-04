"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h2>Something went wrong!</h2>
        <pre style={{ color: 'crimson', margin: '1rem 0' }}>{error.message}</pre>
        <button onClick={() => reset()} style={{ padding: '0.5rem 1rem', borderRadius: 4, background: '#222', color: '#fff', border: 'none' }}>
          Try again
        </button>
      </body>
    </html>
  );
} 