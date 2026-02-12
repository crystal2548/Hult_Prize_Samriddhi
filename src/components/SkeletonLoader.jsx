import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="w-full min-h-screen bg-[#191919] text-white overflow-hidden">
            {/* Navbar Skeleton */}
            <div className="h-20 w-full border-b border-white/10 flex items-center justify-between px-6 lg:px-12">
                <div className="h-10 w-32 bg-white/10 rounded animate-pulse"></div>
                <div className="hidden md:flex gap-8">
                    <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 w-24 bg-[#E5007E]/20 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Hero Section Skeleton */}
            <div className="relative w-full h-[60vh] flex flex-col items-center justify-center px-6 text-center gap-6">
                <div className="h-4 w-40 bg-[#E5007E]/20 rounded animate-pulse mb-2"></div>
                <div className="h-12 w-3/4 max-w-2xl bg-white/10 rounded animate-pulse"></div>
                <div className="h-12 w-2/3 max-w-xl bg-white/10 rounded animate-pulse"></div>
                <div className="h-6 w-1/2 max-w-lg bg-white/5 rounded animate-pulse mt-4"></div>
            </div>

            {/* Content Grid Skeleton */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="h-64 bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
                        <div className="h-12 w-12 bg-[#E5007E]/20 rounded-full animate-pulse"></div>
                        <div className="h-6 w-3/4 bg-white/10 rounded animate-pulse"></div>
                        <div className="h-4 w-full bg-white/5 rounded animate-pulse"></div>
                        <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoader;
