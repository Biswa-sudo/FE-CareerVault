import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===== Typewriter Hook =====
function useTypewriter(phrases, typingSpeed = 80, pauseDuration = 2000) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timer;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, typingSpeed, pauseDuration]);

  return displayText;
}

// ===== Neural Network Canvas Component =====
const NeuralNetwork = () => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Create nodes
    const nodeCount = 80;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 1.5,
      });
    }
    nodesRef.current = nodes;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      const maxDist = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 180, 255, ${opacity * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 210, 255, ${0.5 + Math.random() * 0.3})`;
        ctx.fill();
        // Glow
        ctx.shadowColor = "rgba(100, 180, 255, 0.3)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

// ===== Main Component =====
const SpokenEnglishComingSoon = () => {
  const [progress, setProgress] = useState(0);
  const phrases = [
    "Training natural language models...",
    "Calibrating phonetic analysis...",
    "Initializing real-time voice coaching...",
    "Building your AI conversation partner...",
    "Synthesizing speech patterns...",
    "Optimizing accent recognition...",
  ];
  const displayText = useTypewriter(phrases, 70, 2500);

  // Simulate progress (cycling)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* Neural Network Background */}
      <NeuralNetwork />

      {/* Glowing orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
        {/* ===== Audio Visualizer & AI Core ===== */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          {/* Concentric Sound Rings (Audio Wave) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            {[0, 1, 2, 3, 4].map((i) => {
              const scale = 0.5 + i * 0.12;
              const delay = i * 0.3;
              return (
                <motion.circle
                  key={i}
                  cx="100"
                  cy="100"
                  r={30 + i * 15}
                  fill="none"
                  stroke={`rgba(56, 189, 248, ${0.15 + i * 0.05})`}
                  strokeWidth="2"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "100px 100px" }}
                />
              );
            })}

            {/* Rotating dash rings */}
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="10 20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#818cf8"
              strokeWidth="1.5"
              strokeDasharray="6 24"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />

            {/* AI Core (pulsing center) */}
            <motion.circle
              cx="100"
              cy="100"
              r="18"
              fill="#3b82f6"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="12"
              fill="#60a5fa"
              animate={{ opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Inner glow */}
            <motion.circle
              cx="100"
              cy="100"
              r="8"
              fill="white"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Audio Waveform Bars (circular equalizer) */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * 2 * Math.PI - Math.PI / 2;
              const radius = 85;
              const x = 100 + radius * Math.cos(angle);
              const y = 100 + radius * Math.sin(angle);
              const height = 8 + Math.random() * 18; // random base height
              return (
                <motion.div
                  key={i}
                  className="absolute w-1.5 bg-cyan-300/70 rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%) rotate(" + angle + "rad)",
                    height: height + "px",
                    originY: "bottom",
                  }}
                  animate={{
                    scaleY: [0.4, 1.2, 0.4],
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.6,
                    repeat: Infinity,
                    delay: Math.random() * 1.5,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* ===== Dynamic Status Text (Typewriter) ===== */}
        <div className="mt-6 h-8 flex items-center justify-center text-cyan-300 font-mono text-base md:text-lg tracking-wider">
          <span>{displayText}</span>
          <motion.span
            className="inline-block w-[2px] h-5 bg-cyan-300 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "stepStart" }}
          />
        </div>

        {/* ===== Main Heading ===== */}
        <motion.h1
          className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300">
            The Future of Spoken English
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200">
            is Loading
          </span>
        </motion.h1>

        {/* ===== Subtext ===== */}
        <motion.p
          className="mt-4 text-gray-300 max-w-lg text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our AI is currently training on millions of conversational patterns to deliver
          the most immersive spoken English coaching experience.
        </motion.p>

        {/* ===== Progress Bar ===== */}
        <div className="mt-8 w-64 md:w-80 h-1.5 bg-gray-700/50 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </div>

        {/* ===== Subtle footer ===== */}
        <div className="mt-8 text-gray-500 text-sm tracking-widest uppercase">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
          AI-powered • Coming soon
        </div>
      </div>
    </div>
  );
};

export default SpokenEnglishComingSoon;