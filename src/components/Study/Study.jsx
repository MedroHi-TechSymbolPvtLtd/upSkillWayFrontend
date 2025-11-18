import React, { useState, useEffect } from 'react';

const StudyAbroad = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/v1/cms/study-abroad');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          setCourses(result.data || []);
          setPagination(result.pagination);
        } else {
          throw new Error(result.message || 'Failed to fetch study abroad records');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching study abroad records:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleLearnMore = (course) => {
    console.log('Learn more about:', course.title);
    // Example: navigate to course detail page
    // window.location.href = `/study-abroad/${course.slug || course.id}`;
  };

  const formatPrice = (price) => {
    if (!price) return 'Contact for Price';
    return `$${parseFloat(price).toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading study abroad programs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md mx-auto">
              <p className="font-semibold">Error loading programs</p>
              <p className="text-sm mt-2">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 -mt-22">
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[55px] leading-[100%] tracking-[0] -ml-[550px]">
            Popular Study <span className="text-[#FDB11F]"> Destinations</span>
          </h2>
       
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Programs Available</h3>
            <p className="text-gray-600 mb-6">
              We're currently updating our study abroad programs. Please check back soon for exciting opportunities!
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={course.id || index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    {course.imageUrl && course.imageUrl.startsWith('http') ? (
                      <img 
                        src={course.imageUrl} 
                        alt={course.title || 'Study Abroad Program'}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                      {course.title ? course.title.charAt(0).toUpperCase() : course.country ? course.country.charAt(0).toUpperCase() : '🌍'}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {course.status === 'published' || course.status === 'active' ? 'Available' : course.status || 'Available'}
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {formatPrice(course.price || course.tuitionFee)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.title || course.programName || course.university || 'Study Abroad Program'}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {course.description || course.summary || `Explore amazing study opportunities in ${course.country || 'international destinations'}`}
                  </p>
                  
                  {(course.tags || course.subjects || course.categories) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(course.tags || course.subjects || course.categories || []).slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {(course.tags || course.subjects || course.categories || []).length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          +{(course.tags || course.subjects || course.categories || []).length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="space-y-2 mb-6 text-sm">
                    {course.country && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Country:</span>
                        <span className="font-semibold">{course.country}</span>
                      </div>
                    )}
                    {course.duration && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Created:</span>
                      <span className="font-semibold">{formatDate(course.createdAt)}</span>
                    </div>
                    {(course.slug || course.id) && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Program ID:</span>
                        <span className="font-semibold text-xs">{course.slug || course.id}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleLearnMore(course)}
                      className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                    >
                      Learn More →
                    </button>
                    
                    {(course.videoDemoUrl || course.brochureUrl) && (
                      <button 
                        onClick={() => window.open(course.videoDemoUrl || course.brochureUrl, '_blank')}
                        className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                      >
                        {course.videoDemoUrl ? 'Watch Demo' : 'View Brochure'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {pagination && pagination.totalPages > 1 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {courses.length} of {pagination.total} programs
            </p>
            <div className="flex justify-center space-x-2">
              {pagination.hasPrev && (
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Previous
                </button>
              )}
              <span className="px-4 py-2 bg-orange-500 text-white rounded-md">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              {pagination.hasNext && (
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudyAbroad;