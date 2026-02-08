"use client";

import React, { useState, useEffect } from "react";
import IslamicDivider from "./IslamicDivider";

interface Wish {
    id: string;
    name: string;
    message: string;
    timestamp: number;
}

export default function GuestWishes() {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load wishes from localStorage on mount
    useEffect(() => {
        const savedWishes = localStorage.getItem("wedding-wishes");
        if (savedWishes) {
            setWishes(JSON.parse(savedWishes));
        }
    }, []);

    // Save wishes to localStorage whenever they change
    useEffect(() => {
        if (wishes.length > 0) {
            localStorage.setItem("wedding-wishes", JSON.stringify(wishes));
        }
    }, [wishes]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        // Simulate a brief delay for better UX
        setTimeout(() => {
            const newWish: Wish = {
                id: Date.now().toString(),
                name: name.trim(),
                message: message.trim(),
                timestamp: Date.now(),
            };

            setWishes((prev) => [newWish, ...prev]);
            setName("");
            setMessage("");
            setIsSubmitting(false);
        }, 500);
    };

    return (
        <section className="section islamic-pattern-bg">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="heading-lg text-[var(--text-dark)]">
                        Send Your Wishes
                    </h2>
                    <p className="text-elegant mt-2">
                        Share your blessings and warm wishes for the couple
                    </p>
                    <IslamicDivider />
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="elegant-card mb-10">
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="guest-name"
                                    className="block text-sm uppercase tracking-[0.1em] text-[var(--text-light)] mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="guest-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="guest-message"
                                    className="block text-sm uppercase tracking-[0.1em] text-[var(--text-light)] mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="guest-message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write your blessings and wishes for the couple..."
                                    className="form-input"
                                    rows={4}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-elegant w-full justify-center"
                                style={{ opacity: isSubmitting ? 0.7 : 1 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                                            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                        Send Wishes
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Wishes Display */}
                    {wishes.length > 0 && (
                        <div className="space-y-4">
                            <p className="text-center text-sm uppercase tracking-[0.15em] text-[var(--text-light)] mb-6">
                                {wishes.length} {wishes.length === 1 ? "Blessing" : "Blessings"} Received
                            </p>

                            <div className="grid gap-4 md:grid-cols-2">
                                {wishes.map((wish) => (
                                    <div key={wish.id} className="wish-card">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
                                                style={{ background: "linear-gradient(135deg, var(--muted-gold), var(--gold-light))" }}
                                            >
                                                {wish.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-medium text-[var(--text-dark)]">
                                                    {wish.name}
                                                </p>
                                                <p className="text-elegant text-sm mt-1 break-words">
                                                    {wish.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
