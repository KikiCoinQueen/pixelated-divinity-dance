import { useEffect, useState } from 'react';

interface ObstacleProps {
  startPosition: number;
  speed: number;
  delay: number;
}

export const Obstacle = ({ startPosition, speed, delay }: ObstacleProps) => {
  const [position, setPosition] = useState(startPosition);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setPosition((prev) => {
          if (prev <= -50) {
            return window.innerWidth;
          }
          return prev - speed;
        });
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [speed, delay]);

  return (
    <div
      className="absolute"
      style={{
        left: position,
        bottom: '100px',
        width: '32px',
        height: '32px',
      }}
    >
      {/* Pixelated Fire Hydrant */}
      <div className="absolute bottom-0 w-8 h-10 bg-[#EF4444] rounded-sm"></div>
      <div className="absolute bottom-6 left-2 w-4 h-2 bg-[#F87171]"></div>
      <div className="absolute bottom-3 -left-1 w-2 h-2 bg-[#F87171]"></div>
      <div className="absolute bottom-3 right-0 w-2 h-2 bg-[#F87171]"></div>
    </div>
  );
};