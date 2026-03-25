import React from "react";
import { Gavel, ShieldCheck, Zap, BarChart3, Users, Car } from "lucide-react";
import { Cpu, Wallet, Layers, Smartphone, Check } from "lucide-react";
import auctionImg from "../assets/s1.jpg";
import dealerImg from "../assets/s2.jpg";

const Services = () => {

    const services = [
        {
            icon: <Gavel />,
            title: "Live Auction System",
            desc: "Real-time bidding with competitive pricing and instant updates.",
        },
        {
            icon: <Users />,
            title: "Dealer Network",
            desc: "Access a private network of verified and trusted dealers.",
        },
        {
            icon: <Car />,
            title: "Vehicle Listings",
            desc: "Detailed vehicle listings with inspection and history reports.",
        },
        {
            icon: <ShieldCheck />,
            title: "Secure Transactions",
            desc: "End-to-end protection for all transactions and deals.",
        },
        {
            icon: <Zap />,
            title: "Fast Closures",
            desc: "Accelerated deal finalization and reduced turnaround time.",
        },
        {
            icon: <BarChart3 />,
            title: "Analytics & Insights",
            desc: "Track performance, pricing trends, and bidding behavior.",
        },
    ];

    return (
        <div className="bg-white text-gray-900">

            {/* HERO */}
            <section className="py-24 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Powerful Services for
                    <span className="block bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                        Modern Dealer Auctions
                    </span>
                </h1>

                <p className="mt-6 text-gray-500 text-lg">
                    Built to simplify, accelerate, and secure vehicle trading for dealers.
                </p>
            </section>

            {/* SERVICES */}
            <section className="py-17 max-w-7xl mx-auto px-6 md:px-8">

                {/* MOBILE AUTO SCROLL */}
                <div className="md:hidden overflow-hidden">
                    <div className="flex w-max gap-6 animate-scroll">

                        {[...services, ...services].map((service, i) => (
                            <div
                                key={i}
                                className="group min-w-[260px] p-6 rounded-2xl border border-gray-200 bg-white flex-shrink-0 hover:shadow-xl transition"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 group-hover:bg-black group-hover:text-white transition mb-4">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-semibold">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    {service.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* DESKTOP GRID (UNCHANGED) */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 group-hover:bg-black group-hover:text-white transition mb-4">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-semibold">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </section>

            {/* FEATURE SECTION 1 */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <img src={auctionImg} alt="auction" className="rounded-2xl shadow-xl" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">
                            Real-Time Auction Experience
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Participate in dynamic auctions with live bidding.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {["Verified participants","High trust network","Quality inventory"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-900 text-white">
                                        <Check size={14} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* FEATURE SECTION 2 */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl font-bold">
                            Strong Dealer Ecosystem
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Join a trusted network of verified dealers.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {["Verified participants","High trust network","Quality inventory"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-900 text-white">
                                        <Check size={14} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <img src={dealerImg} alt="dealer" className="rounded-2xl shadow-xl" />
                    </div>

                </div>
            </section>

            {/* PROCESS */}
            <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Platform Capabilities
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Engineered with powerful features.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[{
                            icon: <Cpu size={26} />,
                            title: "Real-Time Engine",
                            desc: "High-speed bidding system.",
                        },
                        {
                            icon: <ShieldCheck size={26} />,
                            title: "Dealer Verification",
                            desc: "Strict onboarding ensures trust.",
                        },
                        {
                            icon: <Wallet size={26} />,
                            title: "Secure Payments",
                            desc: "Encrypted transaction flow.",
                        },
                        {
                            icon: <Layers size={26} />,
                            title: "Inventory Management",
                            desc: "Organize vehicles efficiently.",
                        },
                        {
                            icon: <BarChart3 size={26} />,
                            title: "Analytics Dashboard",
                            desc: "Track insights and performance.",
                        },
                        {
                            icon: <Smartphone size={26} />,
                            title: "Mobile Optimized",
                            desc: "Fully responsive experience.",
                        }].map((item, i) => (
                            <div
                                key={i}
                                className="group relative p-8 rounded-2xl border border-gray-200 bg-white overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 group-hover:bg-black group-hover:text-white transition mb-5">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Services;