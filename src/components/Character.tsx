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
          setPosition(prev => ({ ...prev, x: Math.min(window.innerWidth - 64, prev.x + speed) }));
          break;
        case 'ArrowUp':
          setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - speed) }));
          break;
        case 'ArrowDown':
          setPosition(prev => ({ ...prev, y: Math.min(window.innerHeight - 64, prev.y + speed) }));
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
      {/* Dog Body - Made larger and more defined */}
      <div className="absolute bottom-0 w-16 h-12 bg-[#8B5CF6] rounded-xl"></div>
      
      {/* Head - More pronounced */}
      <div className="absolute bottom-8 w-12 h-10 bg-[#8B5CF6] rounded-xl"></div>
      
      {/* Snout */}
      <div className="absolute bottom-8 left-8 w-6 h-5 bg-[#D6BCFA] rounded-lg"></div>
      
      {/* Nose */}
      <div className="absolute bottom-9 left-12 w-2.5 h-2.5 bg-black rounded-full"></div>
      
      {/* Eyes */}
      <div className="absolute bottom-11 left-6 w-3 h-3 bg-black rounded-full"></div>
      
      {/* Ears - Made more floppy */}
      <div className="absolute bottom-14 left-2 w-5 h-6 bg-[#8B5CF6] rounded-t-lg transform -rotate-12"></div>
      <div className="absolute bottom-14 left-6 w-5 h-6 bg-[#8B5CF6] rounded-t-lg transform rotate-12"></div>
      
      {/* Tail - Enhanced wagging animation */}
      <div 
        className={`absolute bottom-8 -right-4 w-7 h-4 bg-[#8B5CF6] rounded-r-lg ${isMoving ? 'animate-[tail-wag_0.3s_infinite]' : ''}`}
        style={{ transformOrigin: 'left center' }}
      ></div>
      
      {/* Legs - Made more defined */}
      <div className="absolute bottom-0 left-2 w-4 h-5 bg-[#8B5CF6]"></div>
      <div className="absolute bottom-0 left-8 w-4 h-5 bg-[#8B5CF6]"></div>
      <div className="absolute bottom-0 right-2 w-4 h-5 bg-[#8B5CF6]"></div>
      <div className="absolute bottom-0 right-8 w-4 h-5 bg-[#8B5CF6]"></div>
    </div>
  );
};