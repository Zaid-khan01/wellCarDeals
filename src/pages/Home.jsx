import React from "react";
import carImage from "../assets/car.jpg";
import Stats from "../components/Stats";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="bg-white text-gray-900">

            {/* HERO SECTION */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden -mt-5 pt-24">

                {/* Background Image */}
                <img
                    src={carImage}
                    alt="cars"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

                    {/* Tag */}
                    <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
                        Private Dealer Auction Network
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                        Where Vehicles Meet <br />
                        <span className="bg-gradient-to-r from-white via-pink-300 to-pink-500 bg-clip-text text-transparent">
                            Serious Buyers
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        A closed network of verified dealers participating in real-time vehicle auctions,
                        ensuring competitive pricing, transparency, and rapid transactions.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
                        <button className="bg-white text-black px-7 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition shadow-xl">
                            Request Access
                        </button>

                        <button className="border border-gray-400 px-7 py-3 rounded-xl text-sm font-medium hover:border-white hover:text-white transition">
                            Explore Platform
                        </button>
                    </div>

                    <div className="mt-16 flex justify-center">
                        <div
                            className="
      bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl 
      px-6 py-4 shadow-xl
      
      flex flex-col gap-4 text-sm text-gray-200   /* MOBILE */
      md:flex-row md:gap-8 md:px-8 md:py-4        /* DESKTOP */
    "
                        >
                            {[
                                { text: "Verified Dealers", color: "bg-green-400" },
                                { text: "Transparent Bidding", color: "bg-blue-400" },
                                { text: "Fast Settlements", color: "bg-yellow-400" },
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                    viewport={{ once: true, amount: 0.5 }}

                                    className="flex items-center gap-2"
                                >
                                    <span className={`w-2 h-2 ${item.color} rounded-full`}></span>
                                    {item.text}
                                </motion.div>

                            ))}
                        </div>
                    </div>

                </div>

            </section>
            <Stats />

            {/* HOW IT WORKS - TIMELINE */}
            <section className="py-18 bg-gradient-to-b from-white via-gray-100 to-white">
                <div className="max-w-7xl mx-auto px-8">

                    {/* Heading */}
                    <div className="text-center mb-20 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                            How the Auction Works
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            A streamlined journey from listing to successful deal closure.
                        </p>
                    </div>

                    {/* ================= DESKTOP (UNCHANGED) ================= */}
                    <div className="hidden md:block relative mt-20">

                        {/* SVG PATHS (same as yours) */}
                        <svg className="absolute -top-6 left-[12%] w-[25%] h-28" viewBox="0 0 400 90">
                            <path d="M0,40 C80,-60 380,-50 450,130" stroke="#9ca3af" strokeWidth="4" fill="none" strokeDasharray="6 6" />
                        </svg>

                        <svg className="absolute top-[60px] left-[35%] w-[25%] h-28" viewBox="0 0 340 150">
                            <path d="M0,-40 C80,60 280,100 430,-40" stroke="#9ca3af" strokeWidth="4" fill="none" strokeDasharray="6 6" />
                        </svg>

                        <svg className="absolute -top-6 left-[62%] w-[25%] h-28" viewBox="0 0 390 90">
                            <path d="M0,60 C80,-60 380,-60 480,120" stroke="#9ca3af" strokeWidth="4" fill="none" strokeDasharray="6 6" />
                        </svg>

                        <div className="grid grid-cols-4 gap-16">
                            {["Onboarding", "Vehicle Listing", "Live Bidding", "Deal Closure"].map((title, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-black text-white text-lg font-semibold shadow-xl relative z-10">
                                        {i + 1}
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold">{title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= MOBILE (NEW 🔥) ================= */}
                    <div className="md:hidden relative">

                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 w-[2px] h-full bg-gray-300"></div>

                        <div className="flex flex-col gap-12">

                            {[
                                {
                                    title: "Onboarding",
                                    desc: "Verified dealers are added to maintain a trusted ecosystem.",
                                },
                                {
                                    title: "Vehicle Listing",
                                    desc: "Vehicles are uploaded with complete inspection details.",
                                },
                                {
                                    title: "Live Bidding",
                                    desc: "Dealers participate in real-time competitive bidding.",
                                },
                                {
                                    title: "Deal Closure",
                                    desc: "Highest bidder wins and the deal is finalized quickly.",
                                },
                            ].map((step, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-6"
                                >

                                    {/* Circle */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white font-semibold z-10">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-2">
                                            {step.desc}
                                        </p>
                                    </div>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <Benefits />
            <CTA />
        </div>
    );
};

export default Home;