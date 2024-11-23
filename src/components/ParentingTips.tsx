import { HeartIcon, ChatBubbleLeftIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';

const tips = [
  {
    id: '1',
    author: 'Emily Parker',
    role: 'Child Development Specialist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    content: 'Tip: Create a consistent bedtime routine with music. Start with energetic songs and gradually transition to calmer lullabies.',
    likes: 245,
    comments: 23,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    author: 'Dr. Michael Wong',
    role: 'Pediatrician',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    content: 'Music can significantly improve language development in toddlers. Try incorporating songs in different languages during playtime!',
    likes: 189,
    comments: 15,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&auto=format&fit=crop&q=60'
  }
];

export default function ParentingTips() {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [savedPosts, setSavedPosts] = useState<string[]>([]);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSave = (postId: string) => {
    setSavedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Expert Tips</h2>
      <div className="grid gap-4">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-zinc-800/40 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={tip.avatar} 
                alt={tip.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-white">{tip.author}</h3>
                <p className="text-zinc-400 text-sm">{tip.role}</p>
              </div>
            </div>
            <p className="text-zinc-100 mb-3">{tip.content}</p>
            {tip.image && (
              <img 
                src={tip.image} 
                alt="Tip visualization"
                className="w-full rounded-lg mb-3 object-cover h-48"
              />
            )}
            <div className="flex items-center justify-between text-zinc-400">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => toggleLike(tip.id)}
                  className="flex items-center gap-1 hover:text-pink-500 transition-colors"
                >
                  {likedPosts.includes(tip.id) ? (
                    <HeartIconSolid className="w-5 h-5 text-pink-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5" />
                  )}
                  <span>{tip.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-white transition-colors">
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                  <span>{tip.comments}</span>
                </button>
              </div>
              <button 
                onClick={() => toggleSave(tip.id)}
                className={`hover:text-white transition-colors ${
                  savedPosts.includes(tip.id) ? 'text-purple-500' : ''
                }`}
              >
                <BookmarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}