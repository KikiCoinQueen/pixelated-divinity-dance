import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export const Character = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [score, setScore] = useState(0);
  const [name, setName] = useState('DiogoDog');

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

  const handleNameChange = () => {
    const newName = prompt('Enter new name for your dog:', name);
    if (newName) setName(newName);
  };

  return (
    <>
      <div className="fixed top-4 left-4 flex gap-4 items-center z-50">
        <div className="bg-white/80 px-4 py-2 rounded-lg">
          Score: {score}
        </div>
        <button 
          onClick={handleNameChange}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
        >
          Rename {name}
        </button>
      </div>
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
        {/* Enhanced Dog Body */}
        <div className="absolute bottom-0 w-16 h-12 bg-[#8B5CF6] rounded-2xl"></div>
        
        {/* Enhanced Head */}
        <div className="absolute bottom-6 w-12 h-10 bg-[#8B5CF6] rounded-2xl"></div>
        
        {/* Enhanced Snout */}
        <div className="absolute bottom-7 left-8 w-8 h-6 bg-[#D6BCFA] rounded-xl"></div>
        
        {/* Enhanced Nose */}
        <div className="absolute bottom-8 left-14 w-2.5 h-2.5 bg-black rounded-full"></div>
        
        {/* Enhanced Eyes */}
        <div className="absolute bottom-11 left-6 w-3 h-3 bg-black rounded-full"></div>
        
        {/* Enhanced Ears */}
        <div className="absolute -bottom-2 left-1 w-6 h-8 bg-[#8B5CF6] rounded-b-xl transform rotate-45"></div>
        <div className="absolute -bottom-2 left-7 w-6 h-8 bg-[#8B5CF6] rounded-b-xl transform -rotate-45"></div>
        
        {/* Enhanced Tail */}
        <div 
          className={`absolute bottom-8 -right-4 w-8 h-4 bg-[#8B5CF6] rounded-r-xl ${isMoving ? 'animate-[tail-wag_0.3s_infinite]' : ''}`}
          style={{ transformOrigin: 'left center' }}
        ></div>
        
        {/* Enhanced Legs */}
        <div className="absolute bottom-0 left-2 w-3 h-4 bg-[#8B5CF6] rounded-b-lg"></div>
        <div className="absolute bottom-0 left-8 w-3 h-4 bg-[#8B5CF6] rounded-b-lg"></div>
        <div className="absolute bottom-0 right-2 w-3 h-4 bg-[#8B5CF6] rounded-b-lg"></div>
        <div className="absolute bottom-0 right-8 w-3 h-4 bg-[#8B5CF6] rounded-b-lg"></div>
      </div>
    </>
  );
};