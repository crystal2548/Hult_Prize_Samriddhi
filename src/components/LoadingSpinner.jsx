import React from 'react'

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="relative w-16 h-16">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
            {/* Spinning Ring */}
            <div className="absolute inset-0 border-4 border-t-[#e5007e] rounded-full animate-spin"></div>
        </div>
        <p className="text-[#e5007e] font-bold tracking-[0.2em] animate-pulse uppercase text-xs">
            Loading Samriddhi
        </p>
    </div>
);

export default LoadingSpinner