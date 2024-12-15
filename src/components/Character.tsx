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
        width: '64px',
        height: '48px',
        transition: 'transform 0.1s',
      }}
    >
      {/* Dog Body */}
      <div className="absolute bottom-0 w-16 h-10 bg-[#F97316] rounded-xl"></div>
      
      {/* Head */}
      <div className="absolute bottom-6 w-10 h-8 bg-[#F97316] rounded-xl"></div>
      
      {/* Snout */}
      <div className="absolute bottom-6 left-8 w-5 h-4 bg-[#FDE1D3] rounded-lg"></div>
      
      {/* Nose */}
      <div className="absolute bottom-7 left-11 w-2 h-2 bg-black rounded-full"></div>
      
      {/* Eyes */}
      <div className="absolute bottom-9 left-6 w-2 h-2 bg-black rounded-full"></div>
      
      {/* Ears */}
      <div className="absolute bottom-12 left-2 w-4 h-5 bg-[#F97316] rounded-t-lg transform -rotate-12"></div>
      <div className="absolute bottom-12 left-5 w-4 h-5 bg-[#F97316] rounded-t-lg transform rotate-12"></div>
      
      {/* Tail */}
      <div 
        className={`absolute bottom-6 -right-3 w-6 h-3 bg-[#F97316] rounded-r-lg ${isMoving ? 'animate-[tail-wag_0.5s_infinite]' : ''}`}
        style={{ transformOrigin: 'left center' }}
      ></div>
      
      {/* Legs */}
      <div className="absolute bottom-0 left-2 w-3 h-4 bg-[#F97316]"></div>
      <div className="absolute bottom-0 left-6 w-3 h-4 bg-[#F97316]"></div>
      <div className="absolute bottom-0 right-2 w-3 h-4 bg-[#F97316]"></div>
      <div className="absolute bottom-0 right-6 w-3 h-4 bg-[#F97316]"></div>
    </div>
  );
};