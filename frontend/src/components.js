import React, { useState } from 'react';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">BetaBLU</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Cosmos
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Nova
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              API Platform
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Research
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Safety
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Company
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Log in
            </a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Try Cosmos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600 focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-blue-100">
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Cosmos
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Nova
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                API Platform
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Research
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Safety
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Company
              </a>
              <div className="pt-4 pb-2">
                <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Log in
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-base font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-block mt-2 ml-3">
                  Try Cosmos
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Next-Generation AI Research
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Adaptive Intelligence
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                that Evolves
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              BetaBLU builds autonomous AI agents that think, act, learn, and improve over time. 
              Unlike static models, our adaptive systems are persistent, self-improving, and truly intelligent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Cosmos
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 inline-flex items-center justify-center">
                View Research
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1" 
              alt="Advanced AI Systems" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Latest News Component
export const LatestNews = () => {
  const newsItems = [
    {
      title: "BetaBLU introduces Adaptive AI Framework",
      description: "Our breakthrough framework enables AI agents to continuously learn and adapt to new environments without retraining.",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510",
      date: "June 2025",
      category: "Research"
    },
    {
      title: "Cosmos: The Self-Improving AI Agent",
      description: "Meet Cosmos, our flagship autonomous agent that evolves its reasoning capabilities through persistent learning.",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      date: "June 2025",
      category: "Product"
    },
    {
      title: "Nova: Advanced Visual Intelligence",
      description: "Nova brings adaptive visual understanding that learns from each interaction to provide better results over time.",
      image: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f",
      date: "June 2025",
      category: "AI Vision"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest developments</h2>
          <p className="text-xl text-gray-600">Breakthrough advances in adaptive intelligence and autonomous AI systems</p>
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
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-blue-600 font-medium">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stories Component
export const Stories = () => {
  const stories = [
    {
      title: "Revolutionizing autonomous decision-making",
      description: "Discover how our adaptive AI agents are transforming industries by making intelligent decisions that improve over time, handling complex reasoning tasks that traditional AI cannot.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      author: "Dr. Elena Rodriguez",
      role: "Director of Autonomous Systems"
    },
    {
      title: "The future of persistent AI memory",
      description: "Learn how BetaBLU's agents maintain long-term memory and context, enabling them to build upon previous interactions and continuously enhance their capabilities.",
      image: "https://images.pexels.com/photos/7688590/pexels-photo-7688590.jpeg",
      author: "Prof. James Chen",
      role: "Chief Research Officer"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Innovation stories</h2>
          <p className="text-xl text-gray-600">Real breakthroughs in adaptive intelligence and autonomous AI systems</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{story.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{story.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{story.author}</div>
                    <div className="text-sm text-blue-600">{story.role}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Research Component
export const Research = () => {
  const researchItems = [
    {
      title: "Adaptive Learning in Autonomous AI Systems",
      description: "Our latest research on how AI agents can continuously adapt and improve their performance through persistent learning mechanisms.",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg",
      type: "Research Paper",
      date: "June 2025"
    },
    {
      title: "Beyond Static Models: Self-Improving Intelligence",
      description: "Exploring the fundamental differences between traditional static AI and our next-generation adaptive intelligence systems.",
      image: "https://images.unsplash.com/photo-1601132359864-c974e79890ac",
      type: "Technical Report",
      date: "May 2025"
    },
    {
      title: "Memory-Persistent AI Agents",
      description: "Understanding how long-term memory enables AI agents to build context and make better decisions over extended interactions.",
      image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg",
      type: "Research Paper",
      date: "May 2025"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Research breakthroughs</h2>
          <p className="text-xl text-gray-600">Pioneering the future of adaptive intelligence and autonomous AI systems</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchItems.map((item, index) => (
            <article key={index} className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-sm text-blue-600 font-medium">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                  Read research
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Business Component
export const Business = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              Enterprise Solutions
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              BetaBLU for
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Deploy autonomous AI agents that adapt to your business needs. Unlike traditional AI, 
              our systems learn from your specific use cases and continuously improve their performance.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Adaptive Intelligence</h3>
                  <p className="text-gray-300">AI agents that think, act, and improve autonomously over time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Persistent Memory</h3>
                  <p className="text-gray-300">Long-term context and learning that builds upon every interaction</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real-world Integration</h3>
                  <p className="text-gray-300">Seamless tool interaction and decision-making capabilities</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Enterprise Team
              </a>
              <a href="#" className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-400 hover:text-white transition-colors duration-300 inline-flex items-center justify-center">
                View Capabilities
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1665093313889-f936ed2f7cef" 
              alt="Advanced AI Technology" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: ["Cosmos", "Nova", "API Platform", "Developer Tools"]
    },
    {
      title: "Research",
      links: ["Research overview", "Publications", "Adaptive AI", "Safety Research"]
    },
    {
      title: "Company",
      links: ["About BetaBLU", "News", "Careers", "Mission"]
    },
    {
      title: "Developers",
      links: ["Documentation", "API Reference", "Examples", "Community"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">BetaBLU</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the world's most advanced adaptive intelligence systems — AI that thinks, acts, learns, and evolves.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-blue-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
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