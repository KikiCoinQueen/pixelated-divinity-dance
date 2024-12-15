interface CloudProps {
  delay: number;
  top: string;
  left: string;
}

export const Cloud = ({ delay, top, left }: CloudProps) => {
  return (
    <div 
      className="absolute float"
      style={{ 
        top,
        left,
        width: '64px',
        height: '32px',
        backgroundColor: 'white',
        borderRadius: '16px',
        animationDelay: `${delay}s`,
      }}
    >
      <div 
        className="absolute"
        style={{
          top: '-16px',
          left: '8px',
          width: '32px',
          height: '32px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
      <div 
        className="absolute"
        style={{
          top: '-8px',
          left: '24px',
          width: '24px',
          height: '24px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};