import React from 'react'

const VideosSection = () => {
  const videos = [
    {
      title: "Sarah's Journey",
      description: "Current AmeriCorps member shares how City Year helped her discover her passion for education and build professional skills.",
      type: "Current Member Testimonial"
    },
    {
      title: "Marcus's Impact",
      description: "City Year alum discusses how his service year opened doors to a fulfilling career and changed his perspective on success.",
      type: "Alumni Success Story"
    }
  ]

  const handleVideoClick = (title) => {
    alert(`This would play the video: ${title}. In a production app, this would embed or open the actual video.`)
  }

  return (
    <section id="stories" className="stories-section bg-white" style={{ padding: '100px 20px' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-dark">
            Real Stories from Our Community
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/80 max-w-3xl mx-auto">
            Hear from current members and alumni about their City Year experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-neutral-light rounded-xl overflow-hidden transition-all hover:shadow-xl hover-scale cursor-pointer"
              onClick={() => handleVideoClick(video.title)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-accent to-primary flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-primary text-3xl group-hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
                    ▶
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-medium text-sm mb-1">Tap to play</p>
                  <p className="text-white/90 text-xs">Captions available</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neutral-dark">{video.title}</h3>
                <p className="text-neutral-dark/80 leading-relaxed">{video.description}</p>
                <p className="text-sm text-neutral-dark/60 mt-2">{video.type}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://youtube.com/cityyear"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Watch more stories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideosSection

