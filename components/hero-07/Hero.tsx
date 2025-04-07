import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CirclePlay } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative text-black dark:text-white z-10 text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary dark:via-muted/30 via-black/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
        <h1 className="mt-6 text-wrap text-5xl md:text-7xl lg:text-8xl font-bold !leading-[1.2] tracking-tight">
          Welcome to <br /> Cinema Base
        </h1>
        <p className="mt-6 text-[15px] max-w-xl sm:text-lg">
          Dive into our expansive library of blockbuster movies and binge-worthy
          series. Discover the newest releases, timeless classics, and hidden
          gems for your next movie night.
        </p>
        <div className="mt-12 flex items-center justify-center gap-2 sm:gap-4">
          <Button size="lg" className="rounded-full text-sm sm:text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-sm sm:text-baseshadow-none"
          >
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
