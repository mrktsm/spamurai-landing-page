import { useEffect, useRef } from "react";

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();

    // Use a consistent base speed for all waves
    const baseSpeed = 0.1;

    // Adjust wavelength and amplitude while keeping speed consistent
    const waves = Array.from({ length: 15 }, (_, i) => ({
      wavelength: 0.008,
      amplitude: 70 - i * 3, // Increase the difference between back and front wave heights
      speed: baseSpeed, // Consistent speed for all waves
      verticalOffset: i * 35,
      offsetX: 0, // Initial horizontal offset
    }));

    const createGradient = (x: number, verticalOffset: number) => {
      const opacity = Math.max(0, 1 - (verticalOffset / canvas.height) * 2);
      const gradient = ctx.createLinearGradient(x, 0, x + 300, canvas.height);
      gradient.addColorStop(0, `rgba(255, 69, 0, ${opacity})`);
      gradient.addColorStop(1, `rgba(178, 34, 34, ${opacity})`);
      return gradient;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for transparency

      waves.forEach((wave, index) => {
        // Update position using the consistent speed
        wave.offsetX += wave.speed;

        // If the wave offset exceeds the canvas width, reset it
        if (wave.offsetX > canvas.width) {
          wave.offsetX = 0;
        }

        ctx.beginPath();
        ctx.strokeStyle = createGradient(wave.offsetX, wave.verticalOffset);
        ctx.lineWidth = 2;

        const yOffset = wave.verticalOffset;

        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            yOffset -
            Math.sin((x + wave.offsetX) * wave.wavelength) * wave.amplitude -
            Math.sin((x + wave.offsetX) * wave.wavelength * 0.5) *
              wave.amplitude *
              0.3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default WaveBackground;
