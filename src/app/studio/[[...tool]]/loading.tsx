export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f6f7f8',
      color: '#1a6b2e',
      fontFamily: 'var(--font-heading)'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #e0e0e0',
        borderTop: '5px solid #1a6b2e',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <h2 style={{ marginTop: '20px' }}>Initializing Studio...</h2>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
