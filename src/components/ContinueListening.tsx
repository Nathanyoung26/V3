import { PlayIcon } from '@heroicons/react/24/solid';

const songs = [
  {
    title: 'Twinkle Twinkle',
    category: 'Lullaby • Bedtime',
    image: 'https://images.unsplash.com/photo-1618506557292-ec1862b3c506?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'ABC Song',
    category: 'Educational • English',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Old MacDonald',
    category: 'Interactive • Animals',
    image: 'https://images.unsplash.com/photo-1596568960638-96243e4b3b21?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Itsy Bitsy Spider',
    category: 'Action Songs • Fun',
    image: 'https://images.unsplash.com/photo-1633526544365-a98d534c9201?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Wheels on the Bus',
    category: 'Action Songs • Travel',
    image: 'https://images.unsplash.com/photo-1569927366590-f1e0c0327832?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Baby Shark',
    category: 'Popular • Dance',
    image: 'https://images.unsplash.com/photo-1561574765-e9836663193b?w=400&auto=format&fit=crop&q=60'
  }
];

export default function ContinueListening() {
  return (
    <section className="mb-6">
      <h2 className="text-base font-semibold text-white mb-4">Continue Listening</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {songs.map((song) => (
          <div key={song.title} className="bg-zinc-800/40 rounded-md p-2 hover:bg-zinc-800/80 transition-colors cursor-pointer group">
            <div className="relative">
              <img 
                src={song.image} 
                alt={song.title}
                className="aspect-square object-cover rounded-md mb-2"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <PlayIcon className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="font-medium text-white text-xs truncate">{song.title}</p>
            <p className="text-zinc-400 text-xs mt-0.5 truncate">{song.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}