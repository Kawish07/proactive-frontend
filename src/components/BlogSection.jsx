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
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </button>
      </div>
    </section>
  );
};

export default BlogSection;