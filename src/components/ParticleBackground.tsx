import React, { useEffect, useRef } from 'react';

const LogStreamBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Log line properties
    const lines: { text: string; x: number; y: number }[] = [];
    const maxLines = 50;  // Increased for better coverage

    // Sample log patterns
    const logPatterns = [
      "INFO: Process completed successfully",
      "DEBUG: Analyzing data stream",
      "WARN: Resource usage at 80%",
      "ERROR: Connection timeout",
      "INFO: User authentication successful",
      "DEBUG: Cache updated"
    ];

    // Initialize lines in a grid-like pattern
    const rowHeight = canvas.height / 10;
    const colWidth = canvas.width / 5;
    
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 5; col++) {
        if (lines.length < maxLines) {
          lines.push({
            text: logPatterns[Math.floor(Math.random() * logPatterns.length)],
            x: col * colWidth + (Math.random() * 100 - 50), // Add slight randomness
            y: row * rowHeight + (Math.random() * 50 - 25)  // Add slight randomness
          });
        }
      }
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';  // Darker background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '12px monospace';

      lines.forEach(line => {
        // Create gradient effect
        const gradient = ctx.createLinearGradient(line.x, line.y, line.x + 300, line.y);
        gradient.addColorStop(0, 'rgba(155, 135, 245, 0.4)');  // Reduced opacity
        gradient.addColorStop(1, 'rgba(155, 135, 245, 0)');
        ctx.fillStyle = gradient;

        ctx.fillText(line.text, line.x, line.y);
      });
    };

    // Draw once
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();  // Redraw on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};

export default LogStreamBackground;