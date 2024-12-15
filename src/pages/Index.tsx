import { Character } from "@/components/Character";
import { Cloud } from "@/components/Cloud";
import { FloatingEnemy } from "@/components/FloatingEnemy";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#E8F0F2] to-[#A8D1E7]">
      {/* Background Clouds */}
      <Cloud delay={0} top="5%" left="5%" />
      <Cloud delay={1} top="15%" left="25%" />
      <Cloud delay={2} top="10%" left="45%" />
      <Cloud delay={3} top="20%" left="65%" />
      <Cloud delay={4} top="8%" left="85%" />
      <Cloud delay={5} top="25%" left="15%" />
      <Cloud delay={6} top="30%" left="35%" />
      <Cloud delay={7} top="18%" left="75%" />
      <Cloud delay={8} top="12%" left="55%" />
      <Cloud delay={9} top="22%" left="95%" />
      
      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <h1 className="text-5xl font-bold text-[#F9D5A7] mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          DiogoDog 🐕
        </h1>
        <p className="text-xl mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          Your treat-loving furry friend awaits! 🦴
        </p>
        <p className="text-sm mb-8 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          CA: TBA | Use arrow keys to collect treats! 🍖
        </p>
      </div>

      {/* Game Area */}
      <div className="relative z-0 mx-auto px-4">
        <Character />
        {/* Add multiple floating enemies */}
        {[...Array(5)].map((_, i) => (
          <FloatingEnemy key={i} onCollision={() => console.log('Woof! Collision!')} />
        ))}
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-white text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          ↑↓←→ to move your celestial canine companion
        </p>
      </div>
    </div>
  );
};

export default Index;
