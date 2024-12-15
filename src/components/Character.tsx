import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export const Character = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setIsMoving(true);
      const speed = 10;
      
      switch(e.key) {
        case 'ArrowLeft':
          setDirection('left');
          setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - speed) }));
          break;
        case 'ArrowRight':
          setDirection('right');
          setPosition(prev => ({ ...prev, x: Math.min(window.innerWidth - 48, prev.x + speed) }));
          break;
        case 'ArrowUp':
          setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - speed) }));
          break;
        case 'ArrowDown':
          setPosition(prev => ({ ...prev, y: Math.min(window.innerHeight - 48, prev.y + speed) }));
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
        transform: `scaleX(${direction === 'left' ? -1 : 1})`,
        width: '48px',
        height: '48px',
        transition: 'transform 0.1s',
      }}
    >
      {/* Dog Body */}
      <div className="absolute bottom-0 w-12 h-8 bg-[#F97316] rounded-lg"></div>
      
      {/* Head */}
      <div className="absolute bottom-4 w-8 h-6 bg-[#F97316] rounded-lg"></div>
      
      {/* Snout */}
      <div className="absolute bottom-4 left-6 w-4 h-3 bg-[#FDE1D3] rounded"></div>
      
      {/* Eye */}
      <div className="absolute bottom-6 left-5 w-1 h-1 bg-black rounded-full"></div>
      
      {/* Ear */}
      <div className="absolute bottom-8 left-2 w-3 h-4 bg-[#F97316] rounded-t-lg"></div>
      
      {/* Tail */}
      <div 
        className={`absolute bottom-4 -right-2 w-4 h-2 bg-[#F97316] rounded-r-lg ${isMoving ? 'animate-[tail-wag_0.5s_infinite]' : ''}`}
        style={{ transformOrigin: 'left center' }}
      ></div>
      
      {/* Legs */}
      <div className="absolute bottom-0 left-1 w-2 h-3 bg-[#F97316]"></div>
      <div className="absolute bottom-0 right-1 w-2 h-3 bg-[#F97316]"></div>
    </div>
  );
};