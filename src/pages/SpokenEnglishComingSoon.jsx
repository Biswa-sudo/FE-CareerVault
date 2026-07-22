import React from 'react';

const SpokenEnglishComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      
      {/* Animated AI SVG */}
      <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10 w-full h-full"
        >
          {/* Outer Rotating Ring */}
          <g className="origin-center animate-[spin_8s_linear_infinite]">
            <circle cx="100" cy="100" r="85" fill="none" stroke="#E5E7EB" strokeWidth="2" />
            <circle cx="100" cy="100" r="85" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="100 400" strokeLinecap="round" />
            <circle cx="15" cy="100" r="4" fill="#3B82F6" />
            <circle cx="185" cy="100" r="4" fill="#3B82F6" />
          </g>

          {/* Inner Counter-Rotating Ring */}
          <g className="origin-center animate-[spin_12s_linear_infinite_reverse]">
            <circle cx="100" cy="100" r="60" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#60A5FA" strokeWidth="3" strokeDasharray="50 300" strokeLinecap="round" />
          </g>

          {/* Neural Network Nodes */}
          <g className="animate-pulse">
            <line x1="100" y1="70" x2="80" y2="110" stroke="#93C5FD" strokeWidth="2" />
            <line x1="100" y1="70" x2="120" y2="110" stroke="#93C5FD" strokeWidth="2" />
            <line x1="80" y1="110" x2="120" y2="110" stroke="#93C5FD" strokeWidth="2" />
            
            <circle cx="100" cy="70" r="6" fill="#2563EB" />
            <circle cx="80" cy="110" r="6" fill="#2563EB" />
            <circle cx="120" cy="110" r="6" fill="#2563EB" />
          </g>

          {/* Center Processing Core */}
          <circle cx="100" cy="100" r="15" fill="#1D4ED8" className="animate-ping opacity-75" />
          <circle cx="100" cy="100" r="12" fill="#1E3A8A" />
        </svg>
      </div>

      {/* Typography */}
      <div className="text-center max-w-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          Under Development
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800">
          AI is generating this module...
        </h2>
        
        <p className="text-gray-500 text-lg leading-relaxed">
          Your AI conversation partner is currently analyzing linguistic models and calibrating voice modules. The full <span className="font-semibold text-gray-700">Spoken English</span> experience will be available shortly.
        </p>
      </div>

    </div>
  );
};

export default SpokenEnglishComingSoon; 