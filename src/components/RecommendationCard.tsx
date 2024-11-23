import { PlayIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface RecommendationCardProps {
  title: string;
  description: string;
  image: string;
  type: 'song' | 'story' | 'video';
  duration?: string;
  aiGenerated?: boolean;
}

export default function RecommendationCard({ 
  title, 
  description, 
  image, 
  duration,
  aiGenerated = false 
}: RecommendationCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-zinc-800/40 rounded-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {aiGenerated && (
          <span className="absolute top-2 left-2 bg-purple-500/90 text-white text-xs px-2 py-1 rounded-full">
            AI Generated
          </span>
        )}
        {duration && (
          <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {duration}
          </span>
        )}
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-purple-500 rounded-full p-4 hover:scale-110 transition-transform">
            <PlayIcon className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {isLiked ? (
              <HeartIconSolid className="w-5 h-5 text-purple-500" />
            ) : (
              <HeartIcon className="w-5 h-5" />
            )}
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <ShareIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}