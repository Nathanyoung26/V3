import { useState } from 'react';
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const posts = [
  {
    id: '1',
    author: {
      name: 'Emily Parker',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
      handle: '@emilyp'
    },
    content: 'Just discovered the "Colors & Shapes" playlist! My 2-year-old is already singing along. Amazing how music makes learning so fun! 🎵 #EarlyLearning',
    image: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af?w=400&auto=format&fit=crop&q=60',
    likes: 42,
    comments: 5,
    time: '2h'
  },
  {
    id: '2',
    author: {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
      handle: '@mikechen'
    },
    content: 'Pro tip: The French lullabies section is perfect for introducing a second language during bedtime. My daughter now counts to 10 in French! 🇫🇷',
    likes: 38,
    comments: 12,
    time: '5h'
  }
];

export default function FeedPage() {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="pb-20">
      {/* Create Post */}
      <div className="p-4 border-b border-zinc-800">
        <div className="flex gap-3">
          <img 
            src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&auto=format&fit=crop&q=60"
            alt="Your profile"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Share your parenting journey..."
            className="flex-1 bg-white/5 rounded-full px-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Feed */}
      <div className="divide-y divide-zinc-800">
        {posts.map((post) => (
          <article key={post.id} className="p-4">
            <div className="flex gap-3">
              <img 
                src={post.author.image}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-white">{post.author.name}</h3>
                  <span className="text-zinc-400 text-sm">{post.author.handle}</span>
                  <span className="text-zinc-500">·</span>
                  <span className="text-zinc-400 text-sm">{post.time}</span>
                </div>
                <p className="text-white mt-2">{post.content}</p>
                {post.image && (
                  <img 
                    src={post.image}
                    alt="Post content"
                    className="mt-3 rounded-lg w-full"
                  />
                )}
                <div className="flex items-center gap-6 mt-3">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1 text-zinc-400 hover:text-pink-500 transition-colors"
                  >
                    {likedPosts.includes(post.id) ? (
                      <HeartIconSolid className="w-5 h-5 text-pink-500" />
                    ) : (
                      <HeartIcon className="w-5 h-5" />
                    )}
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                    <ChatBubbleLeftIcon className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                    <ShareIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}