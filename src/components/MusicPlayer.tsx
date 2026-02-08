"use client";

import React, { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Create audio element
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
            audioRef.current.loop = true;
        }
    }, []);

    const toggleMusic = () => {
        setHasInteracted(true);

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((error) => {
                    console.log("Audio playback failed:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src="/audio/wedding-music.mp3"
                preload="none"
            />

            {/* Music Toggle Button */}
            <button
                onClick={toggleMusic}
                className="music-toggle"
                aria-label={isPlaying ? "Pause background music" : "Play background music"}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    // Pause icon with sound waves
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                ) : (
                    // Music note icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                    </svg>
                )}
            </button>

            {/* Initial tooltip hint */}
            {!hasInteracted && (
                <div
                    className="fixed bottom-24 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[var(--text-muted)] shadow-lg animate-pulse-soft"
                    style={{ zIndex: 999 }}
                >
                    🎵 Tap for music
                </div>
            )}
        </>
    );
}
