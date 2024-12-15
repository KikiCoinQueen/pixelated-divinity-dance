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
        <h1 className="text-4xl text-primary mb-4">Pixel Gods</h1>
        <p className="text-sm mb-8">Use arrow keys to move around!</p>
      </div>

      {/* Game Area */}
      <div className="relative z-0 mx-auto px-4">
        <Character />
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-0 right-0 text-center text-sm">
        <p>↑↓←→ to move</p>
      </div>
    </div>
  );
};

export default Index;