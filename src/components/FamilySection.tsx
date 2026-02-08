"use client";

import React from "react";
import IslamicDivider from "./IslamicDivider";

export default function FamilySection() {
    return (
        <section className="section gradient-overlay">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="heading-lg text-[var(--text-dark)]">
                        Our Families
                    </h2>
                    <IslamicDivider />
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="elegant-card text-center">
                        <h3
                            className="heading-md mb-6"
                            style={{ color: "var(--soft-green)" }}
                        >
                            Bride&apos;s Family
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-light)] mb-1">
                                    Father
                                </p>
                                <p className="text-xl text-[var(--text-dark)]" style={{ fontWeight: 500 }}>
                                    Shareef
                                </p>
                            </div>

                            <div
                                className="w-8 h-px mx-auto"
                                style={{ background: "var(--border-soft)" }}
                            />

                            <div>
                                <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-light)] mb-1">
                                    Mother
                                </p>
                                <p className="text-xl text-[var(--text-dark)]" style={{ fontWeight: 500 }}>
                                    Ramla
                                </p>
                            </div>

                            <div
                                className="w-8 h-px mx-auto"
                                style={{ background: "var(--border-soft)" }}
                            />

                            <div>
                                <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-light)] mb-1">
                                    Grandmother
                                </p>
                                <p className="text-xl text-[var(--text-dark)]" style={{ fontWeight: 500 }}>
                                    Fathima
                                </p>
                            </div>
                        </div>

                        <IslamicDivider />
                    </div>
                </div>
            </div>
        </section>
    );
}
