import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const FullPageParticles = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Tiny delay to ensure layout and styles are ready before loading particles
    const timeout = setTimeout(() => {
      setShowParticles(true);
    }, 10); // 10ms delay prevents hydration mismatch

    return () => clearTimeout(timeout);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!showParticles) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 h-full w-full -z-10 pointer-events-none"
      options={{
        fullScreen: false,
        background: {
          color: "#1E1E1E",
        },
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.08,
          },
          size: {
            value: 2.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.4,
            outModes: {
              default: "bounce",
            },
          },
        },
      }}
    />
  );
};

export default FullPageParticles;
