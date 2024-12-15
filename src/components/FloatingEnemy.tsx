import { useEffect, useState } from 'react';

interface FloatingEnemyProps {
  onCollision: () => void;
}

export const FloatingEnemy = ({ onCollision }: FloatingEnemyProps) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });
  const [direction, setDirection] = useState({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
  });

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        const newX = prev.x + direction.x * 2;
        const newY = prev.y + direction.y * 2;

        if (newX <= 0 || newX >= window.innerWidth - 32) {
          setDirection(prev => ({ ...prev, x: -prev.x }));
        }
        if (newY <= 0 || newY >= window.innerHeight - 32) {
          setDirection(prev => ({ ...prev, y: -prev.y }));
        }

        return {
          x: Math.max(0, Math.min(window.innerWidth - 32, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 32, newY)),
        };
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, [direction]);

  return (
    <div
      className="absolute float"
      style={{
        left: position.x,
        top: position.y,
        width: '32px',
        height: '32px',
        cursor: 'pointer',
      }}
      onClick={onCollision}
    >
      {/* Pixelated Treat */}
      <div className="absolute w-8 h-8 bg-[#F97316] rounded-lg">
        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-1 right-1 w-4 h-2 bg-[#FDBA74] rounded-sm"></div>
      </div>
    </div>
  );
};