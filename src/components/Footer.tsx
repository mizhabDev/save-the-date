"use client";

import React from "react";
import IslamicDivider from "./IslamicDivider";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section gradient-overlay pb-24 md:pb-10">
            <div className="container text-center">
                <IslamicDivider />

                <p
                    className="bismillah text-xl mb-4"
                    style={{ fontFamily: "'Amiri', serif" }}
                >
                    الحمد لله
                </p>

                <p className="text-elegant text-sm">
                    Fathima Mizbaha & Mohammed Irfan
                </p>

                <p className="text-xs text-[var(--text-light)] mt-4">
                    15 February 2026 • Made with 💕
                </p>

                <p className="text-xs text-[var(--text-light)] mt-2 opacity-50">
                    © {currentYear}
                </p>
            </div>
        </footer>
    );
}
