import React, { useState } from 'react';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-black">OpenAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              ChatGPT
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              Sora
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              API Platform
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              Research
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              Safety
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              Company
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
              Log in
            </a>
            <a href="#" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Try ChatGPT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                ChatGPT
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                Sora
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                API Platform
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                Research
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                Safety
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                Company
              </a>
              <div className="pt-4 pb-2">
                <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium">
                  Log in
                </a>
                <a href="#" className="bg-black text-white px-4 py-2 rounded-full text-base font-medium hover:bg-gray-800 transition-colors inline-block mt-2 ml-3">
                  Try ChatGPT
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
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              ChatGPT for business just got better
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              with connectors to internal tools, MCP support, record mode & SSO to Team, and flexible pricing for Enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center">
                See plans
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors inline-flex items-center justify-center">
                Try ChatGPT
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
              alt="ChatGPT Interface" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-80"></div>
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
      title: "OpenAI introduces new safety measures",
      description: "We're implementing advanced safety protocols to ensure responsible AI development.",
      image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
      date: "June 2025",
      category: "Safety"
    },
    {
      title: "ChatGPT gets major upgrade",
      description: "New features include enhanced reasoning and better integration capabilities.",
      image: "https://images.unsplash.com/photo-1606455390858-521f3a83bdf9",
      date: "June 2025",
      category: "Product"
    },
    {
      title: "API Platform expansion",
      description: "Developers now have access to more powerful AI models and tools.",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
      date: "June 2025",
      category: "API"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest news</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest developments and announcements</p>
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
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
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
      title: "How AI is transforming healthcare",
      description: "Discover how medical professionals are using AI to improve patient outcomes and streamline workflows.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer"
    },
    {
      title: "Education reimagined with AI",
      description: "Teachers and students share their experiences using AI tools to enhance learning and creativity.",
      image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1",
      author: "Prof. Michael Rodriguez",
      role: "Education Technology Director"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Stories</h2>
          <p className="text-xl text-gray-600">Real stories from people using AI to solve real problems</p>
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
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{story.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">{story.author}</div>
                    <div className="text-sm text-gray-500">{story.role}</div>
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
      title: "Advancing AI Safety Research",
      description: "Our latest findings on alignment and safety measures for large language models.",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510",
      type: "Research Paper",
      date: "June 2025"
    },
    {
      title: "Multimodal AI Breakthroughs",
      description: "Exploring the intersection of text, image, and audio processing in AI systems.",
      image: "https://images.unsplash.com/photo-1655890006065-edefcd764af6",
      type: "Technical Report",
      date: "May 2025"
    },
    {
      title: "Scaling Laws for Neural Networks",
      description: "Understanding how model performance scales with compute, data, and parameters.",
      image: "https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg",
      type: "Research Paper",
      date: "May 2025"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest research</h2>
          <p className="text-xl text-gray-600">Pushing the boundaries of AI research and development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchItems.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read paper
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              OpenAI for business
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Transform your organization with AI-powered solutions. From customer service to content creation, 
              unlock new possibilities for your business.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold mb-2">Enterprise-grade security</h3>
                  <p className="text-gray-300">SOC 2 Type II compliant with advanced data protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold mb-2">Custom integrations</h3>
                  <p className="text-gray-300">Connect AI to your existing tools and workflows</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold mb-2">Dedicated support</h3>
                  <p className="text-gray-300">24/7 support from our enterprise team</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Contact sales
              </a>
              <a href="#" className="border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5" 
              alt="AI Technology" 
              className="w-full rounded-2xl"
            />
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-green-500 rounded-full"></div>
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
      links: ["ChatGPT", "Sora", "API Platform", "Playground"]
    },
    {
      title: "Research",
      links: ["Research overview", "Publications", "Safety", "GPT-4"]
    },
    {
      title: "Company",
      links: ["About", "News", "Careers", "Charter"]
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
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>
              <span className="ml-3 text-xl font-bold">OpenAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating safe AGI that benefits all of humanity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
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
            © 2025 OpenAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};