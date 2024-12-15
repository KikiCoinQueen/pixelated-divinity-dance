import { Character } from "@/components/Character";
import { Cloud } from "@/components/Cloud";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Clouds */}
      <Cloud delay={0} top="10%" left="10%" />
      <Cloud delay={1} top="20%" left="30%" />
      <Cloud delay={2} top="15%" left="60%" />
      <Cloud delay={3} top="25%" left="80%" />
      
      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <h1 className="text-4xl text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          Pixel Gods
        </h1>
        <p className="text-sm mb-8 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          Use arrow keys to move your divine doggo!
        </p>
      </div>

      {/* Game Area */}
      <div className="relative z-0 mx-auto px-4">
        <Character />
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-white text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          ↑↓←→ to move your celestial companion
        </p>
      </div>
    </div>
  );
};

export default Index;