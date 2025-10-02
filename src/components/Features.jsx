import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Wallet, 
  Shield, 
  Headphones, 
  Home, 
  CheckCircle, 
  Clock,
  Users,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  const features = [
    {
      icon: Wallet,
      title: "Easy Payment",
      description: "Multiple secure payment methods including UPI, cards, and digital wallets for seamless property transactions.",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      iconBg: "bg-emerald-100",
      delay: 0
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Advanced encryption and verification systems ensure all your property dealings are completely protected.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
      delay: 100
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance from our expert property consultants and technical support team.",
      gradient: "from-purple-500 to-[#8E05C2]",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      delay: 200
    },
    {
      icon: Home,
      title: "Quality Properties",
      description: "Carefully curated and verified properties ensuring you get the best value and authentic listings only.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      iconBg: "bg-orange-100",
      delay: 300
    }
  ];

  

  return (
    <section className=" py-10 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80  rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80  rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div 
            data-aos="fade-up" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8E05C2]/10 to-purple-500/10 border border-[#8E05C2]/20 rounded-full px-6 py-2 text-[#8E05C2] font-semibold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Why Choose NEST
          </div>
          
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
          >
            Experience the{" "}
            <span className="bg-gradient-to-r from-[#8E05C2] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Future of Rentals
            </span>
          </h2>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Revolutionizing the rental experience with cutting-edge technology, 
            unmatched security, and personalized service that puts you first.
          </p>
        </div>

        {/* Stats Section */}
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={feature.delay}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-white border border-gray-200 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-[#8E05C2] group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8E05C2]/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-[#8E05C2] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#8E05C2]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
  
      </div>
    </section>
  );
};

export default Features;
