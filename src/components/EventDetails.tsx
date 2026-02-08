"use client";

import React from "react";
import IslamicDivider from "./IslamicDivider";

export default function EventDetails() {
    return (
        <section className="section islamic-pattern-bg">
            <div className="container flex flex-col items-center">
                <div className="text-center mb-12 w-full">
                    <h2 className="heading-lg text-[var(--text-dark)]">
                        Wedding Ceremony
                    </h2>
                    <IslamicDivider />
                </div>

                <div className="w-full max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Date Card */}
                        <div className="elegant-card soft-glow h-[340px] flex flex-col justify-center items-center text-center p-8">
                            <div className="flex items-center justify-center gap-3 mb-5">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--muted-gold)"
                                    strokeWidth="1.5"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span className="text-sm uppercase tracking-[0.15em] text-[var(--text-light)]">
                                    Save The Date
                                </span>
                            </div>

                            <p className="heading-md text-[var(--muted-gold)] mb-2">
                                15 February 2026
                            </p>
                            <p className="text-elegant text-lg">Sunday</p>

                            <div
                                className="w-16 h-px mx-auto my-5"
                                style={{ background: "linear-gradient(90deg, transparent, var(--muted-gold), transparent)" }}
                            />

                            <p className="text-sm text-[var(--text-light)] italic">
                                Mark your calendars!
                            </p>
                        </div>

                        {/* Venue Card */}
                        <div className="elegant-card soft-glow h-[340px] flex flex-col justify-center items-center text-center p-8">
                            <div className="flex items-center justify-center gap-3 mb-5">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--muted-gold)"
                                    strokeWidth="1.5"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className="text-sm uppercase tracking-[0.15em] text-[var(--text-light)]">
                                    Venue
                                </span>
                            </div>

                            <p className="heading-md text-[var(--muted-gold)] mb-2">
                                Kiliyanannil Auditorium
                            </p>
                            <p className="text-elegant text-lg">Valliyangadi</p>

                            <div
                                className="w-16 h-px mx-auto my-5"
                                style={{ background: "linear-gradient(90deg, transparent, var(--muted-gold), transparent)" }}
                            />

                            <a
                                href="https://maps.app.goo.gl/8R27Ao4qwqZCCSr49?g_st=ac"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-elegant inline-flex text-sm"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                                </svg>
                                View Location
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
