import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8">

                {/* TOP GRID */}
                <div className="grid md:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div>
                        <h3 >
                            <img src="/src/assets/logo1.png" alt="AuctionHub Logo" />
                        </h3>

                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            A private dealer auction platform built for transparency, speed,
                            and trusted transactions across India.
                        </p>

                        {/* Social */}
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.facebook.com/wellcardeals/" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/wellcardeals/" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Contact", path: "/contact" },
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-white transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                "Dealer Onboarding",
                                "Vehicle Auctions",
                                "Secure Transactions",
                                "Analytics Dashboard",
                            ].map((item, i) => (
                                <li key={i} className="hover:text-white transition cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center gap-3">
                                <Phone size={16} />
                                <span>+91 7836008277</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span>wcd@wellcardeals.com</span>
                            </div>

                            <a
                                href="https://www.google.com/maps?q=28.617417,77.077667"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-start gap-3 hover:text-white transition"
                            >
                                <MapPin size={16} />
                                <span>Hari Nagar, Delhi</span>
                            </a>

                        </div>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

                    <p>© {new Date().getFullYear()} WellCarDeals. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;