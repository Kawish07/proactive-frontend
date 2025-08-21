// Animated Gallery Section Component
import { useEffect, useState } from 'react';

const GallerySection = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional carpet cleaning'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern office cleaning'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Residential cleaning service'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Construction site cleanup'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Disinfection cleaning'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Specialist cleaning equipment'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional cleaning team'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cleaning supplies and tools'
    }
  ];

  // Duplicate images for seamless animation
  const firstRow = [...galleryImages.slice(0, 4), ...galleryImages.slice(0, 4)];
  const secondRow = [...galleryImages.slice(4, 8), ...galleryImages.slice(4, 8)];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600">
            View our gallery for a closer look at our expert cleaning results
          </p>
        </div>

        <div className="space-y-6">
          {/* First Row - Left to Right Animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-left-to-right">
              {firstRow.map((image, index) => (
                <div
                  key={`row1-${image.id}-${index}`}
                  className="flex-shrink-0 w-80 h-64 mx-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left Animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-right-to-left">
              {secondRow.map((image, index) => (
                <div
                  key={`row2-${image.id}-${index}`}
                  className="flex-shrink-0 w-80 h-64 mx-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  <style>{`
        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-left-to-right {
          animation: slide-left-to-right 30s linear infinite;
        }

        .animate-slide-right-to-left {
          animation: slide-right-to-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;