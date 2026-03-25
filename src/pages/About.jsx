import React from "react";
import { Users, Target, ShieldCheck, Zap, BarChart3, Lock } from "lucide-react";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Building the Future of
          <span className="block bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Dealer Auctions
          </span>
        </h1>

        <p className="mt-6 text-gray-500 text-lg">
          A private network designed to bring transparency, speed, and trust to vehicle auctions.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a platform built for dealers who demand efficiency and transparency.
              Our system connects verified participants into a seamless auction ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Users />, label: "Trusted Network" },
              { icon: <ShieldCheck />, label: "Secure System" },
              { icon: <Zap />, label: "Fast Execution" },
              { icon: <BarChart3 />, label: "Data Driven" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl text-center bg-white hover:shadow-md transition"
              >
                <div className="text-blue-600 flex justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What We Do
          </h2>
          <p className="text-gray-500 mt-3">
            Simplifying auctions through powerful technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 />,
              title: "Real-Time Auctions",
              desc: "Participate in fast-paced, real-time bidding environments.",
            },
            {
              icon: <Lock />,
              title: "Secure Transactions",
              desc: "End-to-end secure processes for buyers and sellers.",
            },
            {
              icon: <Target />,
              title: "Smart Matching",
              desc: "Connecting the right dealers with the right inventory.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl hover:shadow-lg transition"
            >
              <div className="text-purple-600 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Mission
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          To create a transparent and efficient marketplace where dealers can
          trade with confidence, speed, and complete trust.
        </p>
      </section>
      {/* VALUES */}
      <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Principles that drive every decision and transaction on our platform.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

            {[
              {
                title: "Trust",
                desc: "Building a secure and verified dealer ecosystem.",
              },
              {
                title: "Transparency",
                desc: "Clear bidding processes with no hidden steps.",
              },
              {
                title: "Speed",
                desc: "Fast auctions and quick deal closures.",
              },
              {
                title: "Reliability",
                desc: "Consistent performance and trusted outcomes.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                {/* Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-black/5 to-transparent"></div>

                {/* Top Line Accent */}
                <div className="w-8 sm:w-10 h-[3px] bg-black mb-3 sm:mb-4 group-hover:w-14 sm:group-hover:w-16 transition-all duration-300"></div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Row (Arrow aligned right) */}
                <div className="mt-4 sm:mt-6 flex justify-end text-gray-400 group-hover:text-black transition transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
};

export default About;