interface CloudProps {
  delay: number;
  top: string;
  left: string;
}

export const Cloud = ({ delay, top, left }: CloudProps) => {
  return (
    <div 
      className="absolute float opacity-80"
      style={{ 
        top,
        left,
        width: '80px',
        height: '40px',
        backgroundColor: 'white',
        borderRadius: '20px',
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
      }}
    >
      <div 
        className="absolute"
        style={{
          top: '-20px',
          left: '15px',
          width: '40px',
          height: '40px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
      <div 
        className="absolute"
        style={{
          top: '-12px',
          left: '35px',
          width: '30px',
          height: '30px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};