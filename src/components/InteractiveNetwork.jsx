import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const InteractiveNetwork = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0 h-full w-full" >
        {/* 🌈 Soft Gradient Glow Background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-200/20 via-purple-200/10 to-pink-200/10 blur-3xl"></div>

    <Particles
      id="tsparticles"
      className="absolute right-0 top-0 w-1/2 h-full z-0 pointer-events-none"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#6366f1" },
          links: {
            color: "#6366f1",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            value: 70,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        background: { color: "transparent" },
      }}
    />
    </div>
  );
};

export default InteractiveNetwork;