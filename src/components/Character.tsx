import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export const Character = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setIsMoving(true);
      const speed = 10;
      
      switch(e.key) {
        case 'ArrowLeft':
          setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - speed) }));
          break;
        case 'ArrowRight':
          setPosition(prev => ({ ...prev, x: Math.min(window.innerWidth - 32, prev.x + speed) }));
          break;
        case 'ArrowUp':
          setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - speed) }));
          break;
        case 'ArrowDown':
          setPosition(prev => ({ ...prev, y: Math.min(window.innerHeight - 32, prev.y + speed) }));
          break;
      }
    };

    const handleKeyUp = () => {
      setIsMoving(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div 
      className={`absolute ${isMoving ? 'walk' : ''}`}
      style={{ 
        left: position.x,
        top: position.y,
        width: '32px',
        height: '32px',
        backgroundColor: '#FFD700',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      }}
    />
  );
};