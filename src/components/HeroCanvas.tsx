import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
};

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    let particles: Particle[] = [];

    const mouse = {
      x: 0.5,
      y: 0.5,
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      initParticles();
    };

    const initParticles = () => {
      particles = [];

      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 1 + Math.random() * 3,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.2,
          alpha: 0.3 + Math.random() * 0.6,
        });
      }
    };

    const drawGlow = () => {
      ctx.clearRect(0, 0, width, height);

      // Background Gradient
      const grd = ctx.createLinearGradient(0, 0, width, height);

      grd.addColorStop(0, "#020202");
      grd.addColorStop(1, "#0a0500");

      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // Waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();

        ctx.globalAlpha =
          0.05 + Math.sin(Date.now() * 0.001 + i) * 0.03;

        for (let x = 0; x < width; x += 50) {
          const y =
            height * 0.3 +
            Math.sin(x * 0.005 + Date.now() * 0.002 + i) * 40;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = "var(--primary)";
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.speedX + (mouse.x - 0.5) * 0.5;
        p.y += p.speedY + (mouse.y - 0.5) * 0.3;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 2
        );

        gradient.addColorStop(
          0,
          `rgba(255, 100, 30, ${p.alpha})`
        );

        gradient.addColorStop(1, "rgba(255, 60, 0, 0)");

        ctx.fillStyle = gradient;

        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fill();
      });

      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(drawGlow);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / width;
      mouse.y = e.clientY / height;
    };

    resizeCanvas();
    drawGlow();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default HeroCanvas;