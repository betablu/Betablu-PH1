import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white">BetaBLU</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/cosmos" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Cosmos
            </Link>
            <Link to="/nova" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Nova
            </Link>
            <Link to="/api" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              API Platform
            </Link>
            <Link to="/research" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Research
            </Link>
            <Link to="/safety" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Safety
            </Link>
            <Link to="/company" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Company
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Log in
            </Link>
            <Link to="/cosmos" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Try Cosmos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <Link to="/cosmos" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Cosmos
              </Link>
              <Link to="/nova" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Nova
              </Link>
              <Link to="/api" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                API Platform
              </Link>
              <Link to="/research" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Research
              </Link>
              <Link to="/safety" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Safety
              </Link>
              <Link to="/company" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Company
              </Link>
              <div className="pt-4 pb-2">
                <Link to="/login" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                  Log in
                </Link>
                <Link to="/cosmos" className="bg-white text-black px-4 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors inline-block mt-2 ml-3">
                  Try Cosmos
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Next-Generation AI Research
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Adaptive Intelligence
              <span className="block text-gray-400">that Evolves</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              BetaBLU builds autonomous AI agents that think, act, learn, and improve over time. 
              Unlike static models, our adaptive systems are persistent, self-improving, and truly intelligent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cosmos" className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center justify-center">
                Explore Cosmos
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/research" className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center">
                View Research
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8294564/pexels-photo-8294564.jpeg" 
              alt="Advanced AI Systems" 
              className="w-full rounded-2xl"
            />
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-600 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Products Component
const Products = () => {
  const products = [
    {
      name: "Cosmos",
      description: "Advanced LLM chat agent that learns and adapts from every conversation",
      image: "https://images.pexels.com/photos/15940012/pexels-photo-15940012.jpeg",
      status: "Available",
      link: "/cosmos"
    },
    {
      name: "Deepblu",
      description: "Deep research agent that conducts comprehensive analysis on any topic",
      image: "https://images.unsplash.com/photo-1656510922456-e9018507288f",
      status: "Available",
      link: "/research"
    },
    {
      name: "Nova",
      description: "Advanced visual intelligence system with adaptive learning capabilities",
      image: "https://images.pexels.com/photos/17484901/pexels-photo-17484901.png",
      status: "Coming Soon",
      link: "/nova"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-xl text-gray-400">Autonomous AI agents that evolve with every interaction</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={index} to={product.link} className="group">
              <div className="bg-black rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'Available' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Latest News Component
const LatestNews = () => {
  const newsItems = [
    {
      title: "BetaBLU introduces Adaptive AI Framework",
      description: "Our breakthrough framework enables AI agents to continuously learn and adapt to new environments without retraining.",
      image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg",
      date: "June 2025",
      category: "Research"
    },
    {
      title: "Cosmos: The Self-Improving AI Agent",
      description: "Meet Cosmos, our flagship autonomous agent that evolves its reasoning capabilities through persistent learning.",
      image: "https://images.pexels.com/photos/16245252/pexels-photo-16245252.jpeg",
      date: "June 2025",
      category: "Product"
    },
    {
      title: "Deepblu: Revolutionary Research Agent",
      description: "Deepblu transforms how we conduct research with its deep analytical capabilities and autonomous investigation features.",
      image: "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c",
      date: "June 2025",
      category: "Innovation"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Latest developments</h2>
          <p className="text-xl text-gray-400">Breakthrough advances in adaptive intelligence and autonomous AI systems</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-500 font-medium">{item.date}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Home Page Component
export const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Products />
      <LatestNews />
    </div>
  );
};

// Cosmos Page Component
export const CosmosPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-300 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available Now
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Cosmos
              <span className="block text-gray-400">LLM Chat Agent</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Cosmos is our flagship conversational AI agent that learns and adapts from every interaction. 
              Unlike traditional chatbots, Cosmos maintains persistent memory and continuously improves its responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
                Start Chatting
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.pexels.com/photos/15940012/pexels-photo-15940012.jpeg" 
              alt="Cosmos Chat Interface" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Adaptive Learning</h3>
            <p className="text-gray-400">Learns from every conversation to provide better responses</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Persistent Memory</h3>
            <p className="text-gray-400">Remembers context across sessions for meaningful conversations</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
            <p className="text-gray-400">Lightning-fast responses with deep understanding</p>
          </div>
        </div>

        {/* Chat Demo */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Try Cosmos Now</h3>
          <div className="bg-black rounded-xl p-6 mb-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-white text-black px-4 py-2 rounded-2xl max-w-xs">
                  Hello Cosmos, can you help me with a complex research question?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl max-w-xs">
                  Absolutely! I'm designed to help with complex research. What topic would you like to explore? I can break down complex problems, analyze multiple perspectives, and provide comprehensive insights.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Nova Page Component
export const NovaPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-400 mb-6">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
            Coming Soon
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Nova
            <span className="block text-gray-400">Visual Intelligence</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nova represents the next frontier in visual AI. Our advanced visual intelligence system will understand, 
            analyze, and interact with visual content in ways never before possible.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/17484901/pexels-photo-17484901.png" 
              alt="Nova Visual Intelligence" 
              className="w-full rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Revolutionary Visual AI</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nova will combine advanced computer vision with adaptive learning to create an AI that not only sees 
              but truly understands visual content. From medical imaging to creative design, Nova will transform 
              how we interact with visual information.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold">Advanced Scene Understanding</h3>
                  <p className="text-gray-400 text-sm">Comprehensive analysis of visual scenes and contexts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold">Adaptive Visual Learning</h3>
                  <p className="text-gray-400 text-sm">Continuous improvement through visual pattern recognition</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold">Multi-modal Integration</h3>
                  <p className="text-gray-400 text-sm">Seamless integration with text and audio understanding</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-900 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Be the First to Experience Nova</h3>
          <p className="text-gray-400 mb-8">Join our waitlist to get early access when Nova launches.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-black text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// API Page Component
export const APIPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            API Platform
            <span className="block text-gray-400">Build with BetaBLU</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Integrate our adaptive AI agents into your applications. Our API platform provides 
            enterprise-grade access to Cosmos, Deepblu, and Nova with full customization capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Cosmos API</h3>
            <p className="text-gray-400 mb-6">Conversational AI with persistent memory and adaptive learning</p>
            <div className="bg-black rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm">
                curl -X POST https://api.betablu.ai/cosmos/chat<br/>
                -H "Authorization: Bearer YOUR_API_KEY"<br/>
                -d '{"message": "Hello Cosmos"}'
              </code>
            </div>
            <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              View Docs
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Deepblu API</h3>
            <p className="text-gray-400 mb-6">Deep research capabilities for comprehensive analysis</p>
            <div className="bg-black rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm">
                curl -X POST https://api.betablu.ai/deepblu/research<br/>
                -H "Authorization: Bearer YOUR_API_KEY"<br/>
                -d '{"query": "climate change impacts"}'
              </code>
            </div>
            <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              View Docs
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Nova API</h3>
            <p className="text-gray-400 mb-6">Visual intelligence for image and video analysis</p>
            <div className="bg-black rounded-lg p-4 mb-4">
              <code className="text-gray-400 text-sm">
                # Coming Soon<br/>
                curl -X POST https://api.betablu.ai/nova/analyze<br/>
                -H "Authorization: Bearer YOUR_API_KEY"<br/>
                -F "image=@image.jpg"
              </code>
            </div>
            <button className="w-full bg-gray-700 text-gray-400 py-2 rounded-full font-medium cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$29<span className="text-xl text-gray-400">/month</span></div>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li>• 10,000 API calls/month</li>
                <li>• Cosmos access</li>
                <li>• Basic support</li>
                <li>• Rate limiting: 100/min</li>
              </ul>
              <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white text-black rounded-2xl p-8 transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$99<span className="text-xl text-gray-600">/month</span></div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 100,000 API calls/month</li>
                <li>• Cosmos + Deepblu access</li>
                <li>• Priority support</li>
                <li>• Rate limiting: 1000/min</li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Most Popular
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li>• Unlimited API calls</li>
                <li>• All products access</li>
                <li>• Dedicated support</li>
                <li>• Custom integrations</li>
              </ul>
              <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Research Page Component
export const ResearchPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Research
            <span className="block text-gray-400">Advancing AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our research focuses on developing adaptive intelligence systems that can learn, 
            reason, and evolve autonomously. We're pushing the boundaries of what's possible with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <article className="bg-gray-900 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg" 
              alt="Research" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">June 2025</div>
              <h3 className="text-xl font-bold mb-3">Adaptive Learning in Neural Networks</h3>
              <p className="text-gray-400 mb-4">Exploring how neural networks can adapt and improve their performance over time without explicit retraining.</p>
              <button className="text-white hover:text-gray-300 font-medium">Read Paper →</button>
            </div>
          </article>

          <article className="bg-gray-900 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg" 
              alt="Research" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">May 2025</div>
              <h3 className="text-xl font-bold mb-3">Persistent Memory in AI Agents</h3>
              <p className="text-gray-400 mb-4">Developing memory systems that allow AI agents to maintain context and learn from long-term interactions.</p>
              <button className="text-white hover:text-gray-300 font-medium">Read Paper →</button>
            </div>
          </article>

          <article className="bg-gray-900 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1656510922456-e9018507288f" 
              alt="Research" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 2025</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Decision Making</h3>
              <p className="text-gray-400 mb-4">Research into how AI systems can make complex decisions independently while maintaining alignment with human values.</p>
              <button className="text-white hover:text-gray-300 font-medium">Read Paper →</button>
            </div>
          </article>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Adaptive Intelligence</h3>
              <p className="text-gray-400 leading-relaxed">
                Developing AI systems that can continuously adapt and improve their performance 
                based on new experiences and changing environments.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Autonomous Agents</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating AI agents that can operate independently, make decisions, and take 
                actions without constant human supervision.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Persistent Memory</h3>
              <p className="text-gray-400 leading-relaxed">
                Building memory systems that allow AI to maintain long-term context and 
                learn from extended interactions over time.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Multi-modal Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                Integrating different types of data and sensory inputs to create more 
                comprehensive and capable AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Safety Page Component
export const SafetyPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            AI Safety
            <span className="block text-gray-400">Our Commitment</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Safety is at the core of everything we build. We're committed to developing AI systems 
            that are aligned with human values, transparent, and beneficial for humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Safety Principles</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Human Alignment</h3>
                  <p className="text-gray-400">Our AI systems are designed to understand and align with human values and intentions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparency</h3>
                  <p className="text-gray-400">We believe in making our AI systems interpretable and their decision-making processes clear.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Robustness</h3>
                  <p className="text-gray-400">Our systems are designed to be reliable and perform safely across a wide range of scenarios.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/7988748/pexels-photo-7988748.jpeg" 
              alt="AI Safety Research" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Safety Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Risk Assessment</h3>
              <p className="text-gray-400">Comprehensive evaluation of potential risks and mitigation strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-400">Continuous monitoring of AI system behavior and performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Practices</h3>
              <p className="text-gray-400">Development and sharing of safety best practices across the industry</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Safety Research</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for researchers and practitioners who share our commitment to AI safety.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

// Company Page Component
export const CompanyPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            About BetaBLU
            <span className="block text-gray-400">Our Mission</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            BetaBLU is a next-generation AI research company building the world's most advanced 
            adaptive intelligence systems — autonomous AI agents that can think, act, learn, and improve over time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We envision a future where AI systems are not just tools, but intelligent partners 
              that continuously evolve and adapt to better serve humanity. Our adaptive intelligence 
              systems represent a fundamental shift from static, task-specific models to dynamic, 
              self-improving agents.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unlike traditional AI that requires constant retraining and human intervention, 
              our systems learn autonomously, maintain persistent memory, and improve their 
              capabilities through every interaction.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg" 
              alt="BetaBLU Team" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">Pushing the boundaries of what's possible with AI through groundbreaking research</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Safety</h3>
              <p className="text-gray-400">Ensuring our AI systems are aligned with human values and beneficial for society</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-400">Building trust through open research and clear communication about our technology</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're looking for brilliant minds who share our passion for advancing AI and creating 
            technology that benefits humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
              View Open Positions
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Page Component
export const LoginPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to BetaBLU</h1>
          <p className="text-gray-400">Sign in to access your AI agents</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your password"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account? 
              <button className="text-white hover:text-gray-300 ml-1">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Cosmos", path: "/cosmos" },
        { name: "Deepblu", path: "/research" },
        { name: "Nova", path: "/nova" },
        { name: "API Platform", path: "/api" }
      ]
    },
    {
      title: "Research",
      links: [
        { name: "Research overview", path: "/research" },
        { name: "Publications", path: "/research" },
        { name: "Adaptive AI", path: "/research" },
        { name: "Safety Research", path: "/safety" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About BetaBLU", path: "/company" },
        { name: "News", path: "/" },
        { name: "Careers", path: "/company" },
        { name: "Mission", path: "/company" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", path: "/api" },
        { name: "API Reference", path: "/api" },
        { name: "Examples", path: "/api" },
        { name: "Community", path: "/api" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>
              <span className="ml-3 text-xl font-bold">BetaBLU</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the world's most advanced adaptive intelligence systems — AI that thinks, acts, learns, and evolves.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BetaBLU. All rights reserved. Building adaptive intelligence for humanity.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              AI Ethics
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};