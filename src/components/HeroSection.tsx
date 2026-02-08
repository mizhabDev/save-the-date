"use client";

import React, { useState, useEffect } from "react";
import IslamicDivider from "./IslamicDivider";

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const weddingDate = new Date("2026-02-15T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = weddingDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center section islamic-pattern-bg relative">
            {/* Bismillah */}
            <div className="bismillah mb-8 animate-fade-in-up" style={{ fontFamily: "'Amiri', serif" }}>
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>

            <IslamicDivider />

            {/* Names */}
            <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h1 className="heading-xl text-[var(--text-dark)]">
                    Fathima Mizbaha
                </h1>
                <p
                    className="text-3xl md:text-4xl my-4"
                    style={{ color: "var(--muted-gold)", fontWeight: 300 }}
                >
                    &
                </p>
                <h1 className="heading-xl text-[var(--text-dark)]">
                    Mohammed Irfan
                </h1>
            </div>

            {/* Tagline */}
            <p
                className="text-elegant text-center mt-6 max-w-md animate-fade-in-up italic"
                style={{ animationDelay: "0.4s" }}
            >
                &ldquo;Together with faith, love, and family&rdquo;
            </p>

            <IslamicDivider />

            {/* Countdown */}
            <div
                className="mt-10 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
            >
                <p className="text-center text-sm uppercase tracking-[0.2em] text-[var(--text-light)] mb-4">
                    Counting Down To Our Special Day
                </p>
                <div className="flex gap-2 md:gap-6">
                    <div className="countdown-item elegant-card !p-4 md:!p-6">
                        <div className="countdown-number">{timeLeft.days}</div>
                        <div className="countdown-label">Days</div>
                    </div>
                    <div className="countdown-item elegant-card !p-4 md:!p-6">
                        <div className="countdown-number">{timeLeft.hours}</div>
                        <div className="countdown-label">Hours</div>
                    </div>
                    <div className="countdown-item elegant-card !p-4 md:!p-6">
                        <div className="countdown-number">{timeLeft.minutes}</div>
                        <div className="countdown-label">Minutes</div>
                    </div>
                    <div className="countdown-item elegant-card !p-4 md:!p-6">
                        <div className="countdown-number">{timeLeft.seconds}</div>
                        <div className="countdown-label">Seconds</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 animate-pulse-soft">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--muted-gold)"
                    strokeWidth="2"
                    className="animate-bounce"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
