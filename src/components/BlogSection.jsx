import React from 'react';
import { ChevronUp, ArrowRight, FileText } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Commercial Cleaning",
      date: "July 17, 2024",
      title: "Effective Cleaning For Short-Term Let Properties",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-600 to-green-400"
    },
    {
      id: 2,
      category: "Commercial Cleaning",
      date: "July 17, 2024",
      title: "Cleaning In A Time Of COVID19: What Does Your Business Need?",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-600 to-green-400"
    },
    {
      id: 3,
      category: "Commercial Cleaning",
      date: "July 15, 2024",
      title: "Most Searched Cleaning Jobs and the Hacks to Help You",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-600 to-green-400"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-8">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Blog</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Dive into Our Latest Content<br />
              and Resources
            </h2>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                {/* Card Container */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-60`}></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-green-500 font-semibold text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-24 left-8 bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full shadow-lg transition-colors">
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* WhatsApp button */}
    </section>
  );
};

export default BlogSection;