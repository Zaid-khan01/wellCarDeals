import React from "react";
import { ShieldCheck, Zap, BarChart3, Lock } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Why Dealers Choose Us
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Designed for efficiency, transparency, and trust in every transaction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {[
            {
              icon: <ShieldCheck size={26} />,
              title: "Verified Dealer Network",
              desc: "Only trusted and verified dealers are onboarded, ensuring a secure and reliable marketplace.",
              color: "text-blue-600 bg-blue-50",
            },
            {
              icon: <Zap size={26} />,
              title: "Fast Deal Closures",
              desc: "Real-time auctions enable quicker transactions and faster inventory turnover.",
              color: "text-yellow-600 bg-yellow-50",
            },
            {
              icon: <BarChart3 size={26} />,
              title: "Transparent Bidding",
              desc: "Every bid is visible and tracked, ensuring fairness and complete transparency.",
              color: "text-purple-600 bg-purple-50",
            },
            {
              icon: <Lock size={26} />,
              title: "Secure Transactions",
              desc: "Built with secure processes to protect both buyers and sellers at every step.",
              color: "text-green-600 bg-green-50",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 rounded-2xl border border-gray-200 hover:shadow-md transition duration-300"
            >

              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Benefits;