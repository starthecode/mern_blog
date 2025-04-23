import React from 'react';

export default function LiteYouTubeEmbed({ videoId }) {
  const [isIframeVisible, setIsIframeVisible] = React.useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative cursor-pointer group overflow-hidden rounded-xl border border-junglegreen-400"
      onClick={() => setIsIframeVisible(true)}
    >
      {isIframeVisible ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          className="w-full h-[200px] sm:h-[250px] md:h-[315px]"
        />
      ) : (
        <>
          <img
            src={thumbnailUrl}
            alt="YouTube video thumbnail"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-xl">▶</span>
          </div>
        </>
      )}
    </div>
  );
}
