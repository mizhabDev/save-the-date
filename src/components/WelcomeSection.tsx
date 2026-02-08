"use client";

import React from "react";
import IslamicDivider from "./IslamicDivider";

export default function WelcomeSection() {
    return (
        <section className="section gradient-overlay">
            <div className="container">
                <div className="elegant-card max-w-3xl mx-auto text-center soft-glow">
                    <IslamicDivider />

                    <h2 className="heading-lg text-[var(--text-dark)] mb-6">
                        Welcome
                    </h2>

                    <p className="text-elegant text-lg leading-relaxed">
                        With the blessings of Allah and our beloved families, we joyfully
                        invite you to celebrate our wedding and share in the happiness
                        of this special day.
                    </p>

                    <IslamicDivider />
                </div>
            </div>
        </section>
    );
}
