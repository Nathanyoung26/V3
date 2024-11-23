import { PlayIcon } from '@heroicons/react/24/solid';

const liveVideos = [
  {
    id: '1',
    title: 'Bedtime Routine Tips',
    trainer: 'Dr. Sarah Miller',
    viewers: 234,
    thumbnail: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop&q=60',
    isLive: true
  },
  {
    id: '2',
    title: 'Music & Development',
    trainer: 'Prof. James Chen',
    viewers: 156,
    thumbnail: 'https://images.unsplash.com/photo-1587784002360-a7c35c090720?w=400&auto=format&fit=crop&q=60',
    isLive: true
  },
  {
    id: '3',
    title: 'Language Learning Through Songs',
    trainer: 'Maria Rodriguez',
    viewers: 89,
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=60',
    isLive: false,
    startingIn: '20m'
  }
];

export default function LiveVideos() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Live Now</h2>
      <div className="grid gap-4">
        {liveVideos.map((video) => (
          <div key={video.id} className="bg-zinc-800/40 rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {video.isLive ? (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </span>
              ) : (
                <span className="absolute top-2 left-2 bg-zinc-800/80 text-white text-xs px-2 py-1 rounded-full">
                  Starting in {video.startingIn}
                </span>
              )}
              <button className="absolute inset-0 flex items-center justify-center">
                <PlayIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="font-semibold text-white">{video.title}</h3>
                <p className="text-zinc-300 text-sm">{video.trainer}</p>
                <p className="text-zinc-400 text-xs">{video.viewers} watching</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}